// Cloudflare Workers エントリポイント
// main に functions/api/echo.js を指定しているため、
// この fetch() が全HTTPリクエストを受け取ります。

export default {

  // HTTPリクエスト受信時に実行
  async fetch(request, env) {

    // リクエストURL解析
    const url = new URL(request.url);

    // --------------------------------------------------
    // API : /api/echo
    // --------------------------------------------------
    if (url.pathname === "/api/echo") {

      // ----------------------------------------------
      // GET : API動作確認
      // ----------------------------------------------
      if (request.method === "GET") {

        return Response.json({
          ok: true,
          message: "Cloudflare Workers API is running.",
          endpoint: "POST /api/echo"
        });
      }

      // ----------------------------------------------
      // POST : メッセージ受信
      // ----------------------------------------------
      if (request.method === "POST") {

        try {

          // JSON Body取得
          const body = await request.json();

          // message取得
          const message =
            typeof body.message === "string"
              ? body.message.trim()
              : "";

          // message未入力チェック
          if (!message) {

            return Response.json(
              {
                ok: false,
                error: "message is required."
              },
              {
                status: 400
              }
            );
          }

          // 正常レスポンス返却
          return Response.json({
            ok: true,
            message,
            length: message.length,
            receivedAt: new Date().toISOString()
          });

        } catch (error) {

          // JSON解析失敗
          return Response.json(
            {
              ok: false,
              error: "Invalid JSON request body."
            },
            {
              status: 400
            }
          );
        }
      }

      // ----------------------------------------------
      // GET / POST以外
      // ----------------------------------------------
      return Response.json(
        {
          ok: false,
          error: "Method Not Allowed"
        },
        {
          status: 405
        }
      );
    }

    // --------------------------------------------------
    // API以外のURL
    // --------------------------------------------------
    // public/index.html など静的ファイルへ処理を渡す
    return env.ASSETS.fetch(request);
  }
};