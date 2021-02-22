import React from "react";
import "../styles/item.css";
const ActiveButton = (props) => {
  return (
    <button className={props.nameClass} onClick={props.handleClick}></button>
  );
};

export default ActiveButton;
