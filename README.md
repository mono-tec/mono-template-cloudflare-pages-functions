# mono-sample-cloudflare-pages-workers-form

Cloudflare Pages Functions を利用した、  
フォーム + API(Function) + JSON返却 の最小構成検証用 Repository です。

## 想定している使い方

本 Repository は、  
fork（コピー）して、  
Cloudflare Workers / Pages Functions の学習・検証用途として利用することを想定しています。

## 本サンプルで確認できること

- Cloudflare Pages Functions
- フロントエンドからの fetch POST
- JSONレスポンス返却
- Functions API のローカル実行
- Wrangler による開発環境


## 事前準備

本サンプルでは、
Wrangler 実行用として Node.js が必要です。

今回は以下環境で動作確認しています。

- Node.js 18.x

## 構成

```text
/
├─ index.html
├─ styles.css
├─ script.js
├─ functions/
│   └─ api/
│       └─ echo.js
└─ README.md
```

## ローカル実行

Wrangler をインストール後、以下を実行します。

```bash
npx wrangler pages dev .
```

起動後、コンソールに表示されたURL
（例：http://127.0.0.1:8788）
へアクセスします。

## Related Articles

準備中

## License

MIT License © 2026 mono-tec

## 注意事項

本プロジェクトは、  
学習・検証用途を主目的としています。