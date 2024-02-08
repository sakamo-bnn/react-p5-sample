import React from "react";
import Sketch from "react-p5";

export default function SampleSketch(props) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(150, 150, 70, 70);
    p5.rect(150, 150, 70, 70);
  };

  return <Sketch setup={setup} draw={draw} />;
};
