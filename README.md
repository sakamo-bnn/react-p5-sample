# package.jsonの作成
```
npm init -y
```

# Reactアプリの基礎構築
## Reactパッケージのインストール
```
npm install react react-dom react-scripts
```

## ファイルとソースファイルの作成
コマンドを示すが、GUI(エクスプローラー / Finder)を利用してもよい

-  windows
```
# 静的なアセットを管理するフォルダ
mkdir public
# HTML文書
New-Item ./public/index.html -type file
# Reactアプリケーションに関するファイルを管理するフォルダ
mkdir src
# エントリーポイント
New-Item ./src/index.js -type file
#  メインコンポーネント
New-Item ./src/App.js -type file
```

- mac(動作未確認)
```
# 静的なアセットを管理するフォルダを作成
mkdir public
# HTML文書を作成
touch public/index.html
# Reactアプリケーションに関するファイルを管理するフォルダを作成
mkdir src
# エントリーポイントを作成
touch src/index.js
# メインコンポーネントを作成
touch src/App.js
```

## ソースファイルの編集
- index.html
```html: index.html
<!DOCTYPE html>
<html lang="ja">

  <head>
    <!-- 文書の文字エンコーディングをUTF-8に指定 -->
    <meta charset="UTF-8">
    <!-- ページのタイトルを指定 -->
    <title>サンプルスケッチ</title>
  </head>

  <body>
    <!-- Reactアプリケーションが描画されるルート要素の定義 -->
    <div id="root"></div>
  </body>

</html>
```

- index.js
```jsx: index.js
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

```

- App.js
```jsx: App.js
// Appコンポーネントの定義
function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
    </div>
  );
}

// Appコンポーネントを他のファイルで利用できるようにエクスポート
export default App;
```

## 動作確認
コマンドを容易に利用できるように ```package.json``` を次のように編集する。
```script``` フィールドの値が変更されていることに注目されたい。
```
{
  "name": "react-p5-sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "^5.0.1"
  }
}
```

次のコマンドで React アプリの動作を確認できる。
```
npm start
```

次の内容が出力される。
```
Compiled successfully!

You can now view react-p5-sample in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.56.1:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

次のように「Hello, world!」と表示されればよい。

![alt text](./README_SRC/00_React動作結果.png)

動作の停止
1. ```Ctrl + C``` を押す
1. ターミナルで次の出力が確認できるので，```y``` と入力する
  ```
  Compiled successfully!

  You can now view react-p5-sample in the browser.

    Local:            http://localhost:3000
    On Your Network:  http://192.168.56.1:3000

  Note that the development build is not optimized.
  To create a production build, use npm run build.

  webpack compiled successfully
  ^C^Cバッチ ジョブを終了しますか (Y/N)? y
  ```

# p5.jsの導入
自由にスケッチを書く前に、p5.jsの基本的な動作が実行できるのか確認をしていく。

## パッケージのインストール
```
npm install react-p5
```

## p5.jsのソースファイル
p5.js のプログラムを記したソースファイルを ```src``` フォルダに作成する。
フォルダ名は任意のものでよい。
ここでは ```SampleSketch.js``` とし、コンポーネント名を ```SampleSketch``` とする。
コンポーネント名は任意で決められるが次の点に留意されたい。
- 1文字目は大文字のアルファベットから始まる
  - PascalCase (複数の単語が連なる場合は最初の文字を大文字にして繋げる様式)が一般的
- ファイル名と一致させる
  - あくまで慣例みたなものなので、どうしようもない場合は満たさなくてよい
- 既存のコンポーネント名は利用できない
  - 例: ```Sketch``` は ```react-p5``` で定義済み

```SampleSketch``` コンポーネントに p5.js の描画処理を記述する。
基本的には ```setup()``` 関数や ```draw()``` 関数の中身を触ればよい。
p5.js で実装されている変数や関数、クラスなどは <INS>```p5.```</INS> に続けて記述すれば利用できる。
- キャンバスの横幅: ```p5.width```
- ベクトルの生成: ```p5.createVector(1, 2)```

```jsx: SketchComponent.js
import Sketch from "react-p5";

export default function SampleSketch(props) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(150, 150, 70, 70);
  };

  return <Sketch setup={setup} draw={draw} />;
};
```

```App.js``` の内容を次のように変更する。

```
import SampleSketch from "./SampleSketch"

// Appコンポーネントの定義
function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>

      {/* p5.jsのスケッチ */}
      <SampleSketch />
    </div>
  );
}

// Appコンポーネントを他のファイルで利用できるようにエクスポート
export default App;
```

動作結果を示す。
キャンバスが2つ出ることに対しては未解決状態

![alt text](./README_SRC/01_p5js動作結果.png)

レンダリングの設定を<INS>一時的に</INS>変更するしかない。
- 変更前
```jsx: index.js (ファイル末尾)
root.render(
  // React.StrictModeコンポーネントでアプリケーションをラップする
  <React.StrictMode>
    {/* Appコンポーネントを描画 */}
    <App />
  </React.StrictMode>
);
```
- 変更後
```jsx: index.js (ファイル末尾)
root.render(
  // React.StrictModeコンポーネントでアプリケーションをラップする
  <App />
);
```

変更後のコードでの動作結果を次に示す。

![alt text](./README_SRC/02_p5js動作結果.png)

ビルドする際には変更前のコードで問題ない(Github pages上での動作による確認)。

# Github Pages へのデプロイ
次のサイトを参考にした。

https://qiita.com/tat_mae084/items/745761eee6cd1d42949d

## ```package.json``` の編集
```homepage```、```scripts``` フィールドの値を変更する。
特に ```scripts``` フィールドにある ```git``` キー の値が記事の内容と違うので注意せよ。
(記事では ```main``` が ```master``` となっている)


```
  <省略>
  "homepage": "https://github.com/sakamo-bnn/react-p5-sample/",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "rm": "rm -rf docs",
    "mv": "mv build docs",
    "git": "git add . && git commit && git push origin main",
    "deploy": "npm run rm && npm run build && npm run mv && npm run git"
  },
  <省略>
```

## デプロイ
コマンドの実行: ```rm``` コマンドが実行できる環境を整えよ(Git Bashなど)
```
npm run deploy
```

次のログが出力される。
```
> react-p5-sample@1.0.0 git
> git add . && git commit && git push origin main

warning: in the working copy of 'docs/asset-manifest.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/static/js/main.98587e68.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/static/js/main.98587e68.js.LICENSE.txt', LF will be replaced by CRLF the next time Git touches it
hint: Waiting for your editor to close the file...
```

ここで ```docs`` フォルダが作成される。
VSCode など何かしらのエディターで ```COMMIT_EDITMSG``` が開かれる。

```COMMIT_EDITMSG: 
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
# Your branch is up to date with 'origin/main'.
#
# Changes to be committed:
# <変更内容が以下に続く>
```

```<変更内容が以下に続く>``` 以降の行にある ```#``` を外して保存し、エディターを閉じる。
これで変更の内容が Github 上へ反映される(このコマンドの他に ```commit``` や ```push``` の操作は不要)。

# リポジトリの設定
## リポジトリの公開範囲
1. Github のWebサイトでリポジトリのページを開く
1. ```[Setting > General > Danger Zone]``` からリポジトリを public にする

## Github Pages の設定
```[Setting > Pages > GitHub Pages > Build and deployment > Branch]``` で、
```Branch``` を ```main```、
```folder``` を ```docs``` にそれぞれ変更する。

![alt text](./README_SRC/03_GithubPagesの設定.png)

## 動作の確認
```[Actions > All worksflows]``` でチェックマークがつくとデプロイが完遂したことを示す。

![alt text](./README_SRC/04_デプロイの完遂.png)

該当する操作をクリックすると次の画面になる。

![alt text](./README_SRC/05_デプロイの様子.png)

```deploy``` の下にある URL をクリックすると動作が確認できる。

![alt text](./README_SRC/06_動作の確認.png)

アプリケーションに変更を加えたときは、再度 ```npm run deploy``` コマンドを実行してデプロイの操作をすればよい。

![alt text](./README_SRC/07_変更の反映.png)

## ファイルのインポートについて
```loadShader()``` 関数で shader オブジェクトを生成しようとするのに躓いたので記録を残す。
結論から記すと、ファイルパスを単なる文字列や変数で管理するのではなく、```import``` 文を使うことで解決した。
他の load系 の関数(```loadImage()```)も同様かは不明。

- ダメだった例
```shader の動作失敗例:JSX
import React from "react";
import Sketch from "react-p5";

export default function SampleSketch(props) {
  let theShader;

  const preload = (p5) => {
    theShader = p5.loadShader("./main.vert", "./main.frag");
  }

  const setup = (p5, canvasParentRef) => {
    // メインキャンバスの作成
    p5.resizeCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.shader(theShader);

    p5.rect(0, 0, p5.width, p5.height);
  };

  return <Sketch
    preload={preload}
    setup={setup}
    draw={draw}
  />;
};
```

- 成功した例
```shader の動作成功例:JSX
import React from "react";
import Sketch from "react-p5";

// シェーダファイルへのパス
import VERT_FILE from "./main.vert"
import FRAG_FILE from "./main.frag"

export default function SampleSketch(props) {
  let theShader;

  const preload = (p5) => {
    theShader = p5.loadShader(VERT_FILE, FRAG_FILE);
  }

  const setup = (p5, canvasParentRef) => {
    // メインキャンバスの作成
    p5.resizeCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.shader(theShader);

    p5.rect(0, 0, p5.width, p5.height);
  };

  return <Sketch
    preload={preload}
    setup={setup}
    draw={draw}
  />;
};
```
