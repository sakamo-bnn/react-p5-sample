// ReactおよびReactDOMをインポート
import React from 'react';
import ReactDOM from 'react-dom/client';

// Appコンポーネントを'./App'からインポート
import App from './App';

// ルート要素を特定のDOM要素に関連付ける
const root = ReactDOM.createRoot(document.getElementById('root'));

// ルート要素にReactコンポーネントを描画する
root.render(
  // React.StrictModeコンポーネントでアプリケーションをラップする
  <React.StrictMode>
    {/* Appコンポーネントを描画 */}
    <App />
  </React.StrictMode>
);
