import React, { useEffect } from "react";
import p5 from 'p5';

// 描画処理
const circle = (p) => {
  p.setup = () => {
    // セットアップ処理
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(0);
    p.ellipse(200, 200, 80, 80); // サークルを描画
    p.rect(200, 200, 80, 80); // サークルを描画
  };
};

// 
const Canvas = () => {
  useEffect(() => {
    new p5(circle); // p5.jsのキャンバスを生成
  }, []);

  return (<></>);
};

export default Canvas;
