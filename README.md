# mono-sample-cloudflare-pages-workers-form

Cloudflare Pages Functions を利用した、  

```text
フォーム
↓
POST
↓
API(Function)
↓
JSON返却
```

の最小構成を確認するためのサンプル Repository です。

---

## 想定している使い方

本 Repository は、

- fork（コピー）
- clone
- ローカル実行
- Cloudflare Pages への Deploy

を試しながら、

> 「Cloudflare Pages Functions の基本構成」

を学習・検証する用途を想定しています。

---

## 本サンプルで確認できること

- Cloudflare Pages Functions
- fetch API による POST 通信
- JSON レスポンス返却
- Wrangler によるローカル実行
- GitHub Repository 連携
- Cloudflare Pages Deploy

---

## 事前準備

本サンプルでは、
Wrangler 実行用として Node.js が必要です。

今回は以下環境で動作確認しています。

- Node.js 26.x

---

## 構成

```text
/
├─ index.html
├─ styles.css
├─ script.js
├─ functions/
│   └─ api/
│       └─ echo.js
├─ docs/
│   └─ internal-api-spec.md
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
npx wrangler pages dev .
```

起動後、
コンソールに表示された URL  
（例：http://127.0.0.1:8788）  
へアクセスします。

---

## Cloudflare Pages への Deploy

GitHub Repository を Cloudflare Pages と連携することで、
Cloudflare 上へ Deploy できます。

GitHub へ Push を行うと、
Cloudflare Pages 側で自動的に再 Deploy されます。

---

## Related Articles

準備中

---

## License

MIT License © 2026 mono-tec

---

## 注意事項

本プロジェクトは、

- 学習用途
- 検証用途
- サンプル用途

を主目的として公開しています。