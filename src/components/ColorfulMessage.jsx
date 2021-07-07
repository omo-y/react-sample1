import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontSize: props.size,
    message: props.message
  };
  return <p style={contentStyle}>{props.message}</p>;
};
export default ColorfulMessage;
