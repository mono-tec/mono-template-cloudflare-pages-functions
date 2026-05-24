// フォーム要素を取得
const form = document.getElementById("apiForm");

// メッセージ入力欄を取得
const messageInput = document.getElementById("message");

// APIレスポンス表示領域を取得
const result = document.getElementById("result");

// フォーム送信時イベント
form.addEventListener("submit", async (event) => {

  // 通常のフォーム送信を停止
  event.preventDefault();

  // 入力メッセージ取得
  const message = messageInput.value.trim();

  // 未入力チェック
  if (!message) {

    result.textContent = "メッセージを入力してください。";

    return;

  }

  // ボタン取得
  const button = form.querySelector("button");

  // 二重送信防止
  button.disabled = true;

  // ボタン表示変更
  button.textContent = "送信中...";

  try {

    // Cloudflare Pages Functions API 呼び出し
    const response = await fetch("/api/echo", {

      // HTTPメソッド
      method: "POST",

      // リクエストヘッダ
      headers: {
        "Content-Type": "application/json"
      },

      // JSONデータ送信
      body: JSON.stringify({
        message
      })

    });

    // JSONレスポンス取得
    const data = await response.json();

    // レスポンス表示
    result.textContent =
      JSON.stringify(data, null, 2);

  } catch (error) {

    // API呼び出し失敗時
    result.textContent =
      JSON.stringify({

        ok: false,

        error: "APIの呼び出しに失敗しました。",

        detail: error.message

      }, null, 2);

  } finally {

    // ボタン有効化
    button.disabled = false;

    // ボタン表示戻し
    button.textContent = "APIを実行する";

  }

});