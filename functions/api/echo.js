// POST /api/echo が呼ばれたときに実行される
export async function onRequestPost(context) {

  try {

    // リクエストBody(JSON)を取得
    const body = await context.request.json();

    // message が文字列か確認し、前後の空白を除去
    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    // message が空の場合はエラー返却
    if (!message) {

      return jsonResponse({
        ok: false,
        error: "message is required."
      }, 400);

    }

    // 正常時はJSONを返却
    return jsonResponse({
      ok: true,

      // 受信したメッセージ
      message,

      // メッセージ文字数
      length: message.length,

      // サーバ受信日時
      receivedAt: new Date().toISOString()
    });

  } catch (error) {

    // JSON解析失敗時のエラー返却
    return jsonResponse({
      ok: false,
      error: "Invalid JSON request body."
    }, 400);

  }

}

// GET /api/echo が呼ばれたときに実行される
export async function onRequestGet() {

  // API疎通確認用レスポンス
  return jsonResponse({
    ok: true,
    message: "Cloudflare Pages Functions API is running.",
    endpoint: "POST /api/echo"
  });

}

// JSONレスポンス生成共通関数
function jsonResponse(data, status = 200) {

  // JSON形式でResponseを返却
  return new Response(

    // JSON文字列化
    JSON.stringify(data, null, 2),

    {
      // HTTPステータスコード
      status,

      // レスポンスヘッダ
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }

  );

}