import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  //分割代入
  const { color, size, message } = props;
  const contentStyle = {
    color,
    fontSize: size,
    message
  };
  return <p style={contentStyle}>{message}</p>;
};
export default ColorfulMessage;
