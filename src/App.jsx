import React from "react";

const contentStyle = {
  color: "blue",
  fontSize: "18px"
};

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか？？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;
