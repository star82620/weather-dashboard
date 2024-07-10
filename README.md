<h1 align="center">Weather Dashboard 天氣預報工具</h1>

<div align="center" style="margin-bottom:24px">
  <a href="https://weather-dashboard-ayu.vercel.app">專案網址</a> ｜
  <a href="https://github.com/star82620/weather-dashboard">Github Repo</a> ｜
  <a href="https://sakayi.notion.site/ee7b67ee79364482bc30b5e0226c8f2b?pvs=4">Notion 工作文件</a>
</div>

## 專案說明

Weather Dashboard 是一款擁有簡潔畫面的天氣工具，提供即時天氣狀況以及五日天氣預報，讓使用者輕鬆掌握天氣狀態，方便安排日常行程。

## 功能介紹

- 提供即時天氣狀況、五日天氣預報
- 搜尋指定城市並查看即時天氣狀況與五日天氣預報
- 可儲存常用城市，一鍵切換查詢天氣狀況
- 切換攝氏、華氏溫度單位
- 切換深色、淺色主題

---

## 本地端運行說明

git colon 專案

```bash
 git clone https://github.com/star82620/weather-dashboard.git
```

進入專案

```bash
  cd weather-dashboard
```

安裝套件

```bash
  npm install
```

建立環境變數

```bash
  .env.example 改為 .env.local
```

(\* 由於代理伺服器的開發用金鑰有時間限制，開發者將視情況更新 .env.example 檔案)

啟動專案

```bash
  npm run dev
```

---

## Git branch 規則

| type     | description                      |
| -------- | -------------------------------- |
| feature/ | 新功能                           |
| update/  | 更新                             |
| fix/     | 修復 bug                         |
| docs/    | 處理文件、與程式碼邏輯無關的內容 |

## Git commit 規則

| type     | description |
| -------- | ----------- |
| feature: | 新功能      |
| update:  | 更新        |
| fix:     | 修復錯誤    |

## Git flow

```

```

---

## 開發技術與工具

- 前端框架：React
- 樣式管理：styled-components
- 型別管理：TypeScript
- 狀態管理：ReduxToolkit
- 部屬平台：Vercel
- 版本控制：Git

## API 工具與服務

- [Weather Forecast API](https://open-meteo.com/en/docs)
  取得天氣資料
- [Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
  城市轉換地理資訊

- [CORS.SH -
  CORS PROXY](https://proxy.cors.sh/) 代理伺服器
