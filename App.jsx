import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初001");
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  const [faceShowflag, setFaceShowFlag] = useState(false);
  const onClickswitchshowflag = () => {
    setFaceShowFlag(!faceShowflag);
  };
  const contentLedystyle = {
    fontSize: "25px",
    color: "pink",
    fontWeight: "bold"
  };
  useEffect(() => {
    console.log("useeffectの中");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowflag || setFaceShowFlag(true);
      } else {
        faceShowflag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" Size="20px" message="元気ある" />
      <ColorfulMessage color="red" size="50px" message="元気なし" />
      <p style={contentLedystyle}>元気です</p>
      <p>{num}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickswitchshowflag}>ＯＮ／ＯＦＦ</button>

      {faceShowflag && <p>( ^)o(^ )</p>}
    </>
  );
};
export default App;
