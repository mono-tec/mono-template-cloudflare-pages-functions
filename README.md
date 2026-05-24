# mono-sample-cloudflare-pages-workers-form

Cloudflare Workers を利用した、

```text
フォーム
↓
POST
↓
API(Worker)
↓
JSON返却
```

の最小構成を確認するためのサンプル Repository です。

---

## 想定している使い方

本 Repository は、

* fork（コピー）
* clone
* ローカル実行
* Cloudflare Workers Deploy

を試しながら、

> 「Cloudflare Workers + 静的配信構成」

を学習・検証する用途を想定しています。

---

## 本サンプルで確認できること

* Cloudflare Workers
* fetch API による POST 通信
* JSON レスポンス返却
* Wrangler によるローカル実行
* GitHub Repository 連携
* Cloudflare Workers Deploy
* 静的ファイル配信（public ディレクトリ）

---

## 事前準備

本サンプルでは、
Wrangler 実行用として Node.js が必要です。

今回は以下環境で動作確認しています。

* Node.js 26.x

---

## 構成

```text
/
├─ public/
│   ├─ index.html
│   ├─ styles.css
│   └─ script.js
├─ functions/
│   └─ api/
│       └─ echo.js
├─ docs/
│   └─ internal-api-spec.md
├─ wrangler.jsonc
└─ README.md
```

---

## API仕様書

API仕様については、
以下ドキュメントを参照してください。

```text
docs/internal-api-spec.md
```

---

## ローカル実行

PowerShell またはコマンドプロンプトで、
以下を実行します。

```bash
npx wrangler dev
```

起動後、
コンソールに表示された URL
（例：[http://127.0.0.1:8787）](http://127.0.0.1:8787）)
へアクセスします。

---

## Cloudflare Workers への Deploy

GitHub Repository を Cloudflare Workers と連携することで、
Cloudflare 上へ Deploy できます。

GitHub へ Push を行うと、
Cloudflare 側で自動的に再 Deploy されます。

---

## Wrangler設定

本サンプルでは、
`wrangler.jsonc` を利用して、

* Worker エントリポイント
* 静的ファイル配信
* public ディレクトリ

を設定しています。

```json
{
  "name": "mono-template-cloudflare-pages-functions",
  "main": "functions/api/echo.js",
  "compatibility_date": "2026-05-24",
  "assets": {
    "directory": "public",
    "run_worker_first": [
      "/api/*"
    ]
  }
}
```

---

## License

MIT License © 2026 mono-tec

---

## 注意事項

本プロジェクトは、

* 学習用途
* 検証用途
* サンプル用途

を主目的として公開しています。

---

## 補足

Wrangler はファイル監視を行うため、
他ツールが使用中のファイルが存在する場合、
ファイル監視エラーが発生することがあります。

Visual Studi
