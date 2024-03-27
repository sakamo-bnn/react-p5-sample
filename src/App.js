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