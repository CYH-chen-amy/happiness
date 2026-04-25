// ============================================================
// firebase-config.js
// 從 Firebase 主控台 → 專案設定 → 一般 → 「您的應用程式」取得，
// 把下面這個物件整個換掉即可。
//
// 取得方法：
//   1. 前往 https://console.firebase.google.com/
//   2. 建立或選擇專案 → 加入 Web 應用程式（</> 圖示）
//   3. 複製 firebaseConfig 內容，貼到下面
// ============================================================

export const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
};
