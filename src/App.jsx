import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  const contentLedystyle = {
    fontSize: "20px",
    color: "pink",
    fontWeight: "bold"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" Size="20px" message="元気ある" />
      <ColorfulMessage color="red" size="50px" message="元気なし" />
      <p style={contentLedystyle}>元気です</p>
      <p>{num}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </>
  );
};
export default App;
