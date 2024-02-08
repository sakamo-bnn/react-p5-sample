// import React from "react";
// import Sketch from "react-p5";

// export default function SketchComponent(props) {
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(300, 300).parent(canvasParentRef);
//   };

//   const draw = (p5) => {
//     p5.background(0);
//     p5.ellipse(150, 150, 70, 70);
//   };

//   return <Sketch setup={setup} draw={draw} />;
// };



//<Sketchのpropsで渡す
import React, { useState } from 'react';
import Sketch from "react-p5";

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      {/* <p>クリック回数: {count}</p> */}
      {/* <Sketch setup={setup} draw={draw} mouseClicked={handleClick} /> */}
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

// 以下はp5.jsの関数です
function setup(p5, canvasParentRef) {
  p5.createCanvas(400, 400).parent(canvasParentRef);
}

function draw(p5) {
  p5.background(0);
  p5.ellipse(200, 200, 50, 50);
}

export default App;