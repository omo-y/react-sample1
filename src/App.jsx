import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
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
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;
