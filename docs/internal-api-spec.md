---
title: Cloudflare Workers API仕様書
version: v1.1.0
date: 2026-05-24
---

# 1. 文書概要

本書は、Cloudflare Workers を利用した
サンプル API の仕様を整理したものです。

本 API は、

```text
画面
↓
POST
↓
Cloudflare Workers API
↓
JSON返却
```

という最小構成を確認することを目的としています。

---

# 2. API 全体構成

```mermaid
flowchart LR
  Browser[ブラウザ] --> API[Cloudflare Workers]
  API --> JSON[JSONレスポンス]
```

## 2.1 構成イメージ

```text
/
├─ public/
├─ functions/
│   └─ api/
│       └─ echo.js
└─ wrangler.jsonc
```



---

# 3. 共通仕様

## 3.1 ベースURL

ローカル実行時：

```text
http://127.0.0.1:8787
```

Cloudflare Workers Deploy 後：

```text
https://xxxxx.pages.dev
```

---

## 3.2 データ形式

本 API では JSON を利用します。

### リクエスト

```json
{
  "message": "test"
}
```

### レスポンス

```json
{
  "ok": true,
  "message": "test",
  "length": 4,
  "receivedAt": "2026-05-24T10:00:00.000Z"
}
```

---

# 4. エンドポイント一覧

| Method | Path | 内容 |
|---|---|---|
| GET | /api/echo | API 動作確認 |
| POST | /api/echo | メッセージ送信 |

---

# 5. API 詳細仕様

## 5.1 GET /api/echo

### 概要

API が動作しているか確認するためのエンドポイントです。

### レスポンス例

```json
{
  "ok": true,
  "message": "Cloudflare Workers API is running.",
  "endpoint": "POST /api/echo"
}
```

---

## 5.2 POST /api/echo

### 概要

メッセージを受信し、
JSON として返却します。

---

### リクエスト Body

| 項目 | 型 | 必須 | 内容 |
|---|---|---|---|
| message | string | ○ | 送信メッセージ |

---

### リクエスト例

```json
{
  "message": "test"
}
```

---

### レスポンス例（成功）

```json
{
  "ok": true,
  "message": "test",
  "length": 4,
  "receivedAt": "2026-05-24T10:00:00.000Z"
}
```

---

### レスポンス項目

| 項目 | 型 | 内容 |
|---|---|---|
| ok | boolean | 実行結果 |
| message | string | 送信メッセージ |
| length | number | 文字数 |
| receivedAt | string | 受信日時 |

---

### エラーレスポンス例

```json
{
  "ok": false,
  "error": "message is required."
}
```

---

# 6. ローカル実行方法

PowerShell またはコマンドプロンプトで以下を実行します。

```bash
npx wrangler dev
```

起動後、
以下 URL へアクセスします。

```text
http://127.0.0.1:8787
```

---

# 7. GitHub / Cloudflare Workers 連携

本サンプルは以下構成を想定しています。

```text
GitHub
↓
Cloudflare Workers
↓
自動Deploy
```

GitHub へ Push を行うと、
Cloudflare Workers 側で自動的に再デプロイされます。

---

# 8. 将来拡張

本サンプルをベースに、
以下のような拡張を想定できます。

- API エンドポイント追加
- DB 接続
- 認証追加
- 外部 API 呼び出し
- フロントエンド SPA 化

---

# 9. 改訂履歴

| 版数 | 改定日 | 内容 |
|---|---|---|
| v1.0.0 | 2026-05-24 | 初版 |
| v1.1.0 | 2026-05-25 | Cloudflare Workers 構成へ修正 |