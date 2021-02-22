import React, { useState, useEffect } from "react";
import "../styles/item.css";
import cross from "../images/icon-cross.svg";
export default function Item(props) {
  const [stateCheck, setStateCheck] = useState(true);
  const [style, setStyle] = useState("enable");
  useEffect(() => {
    if (stateCheck) {
      setStyle("enable");
    } else {
      setStyle("disable");
    }
  }, [stateCheck]);

  function handleState() {
    setStateCheck(!stateCheck);
    if (props.item.active) {
      props.item.active = false;
    } else {
      props.item.active = true;
    }
  }

  function handleDeleteItem() {
    props.deleteItem(props.item.id);
  }

  if (!props.item.active) {
    return (
      <div className="item">
        <label for={props.item.id}>
          <input
            id={props.item.id}
            type="checkbox"
            onClick={handleState}
            checked
          ></input>
        </label>
        <div className="container-p">
          <p className="content disable">{props.item.title}</p>
        </div>
        <button onClick={handleDeleteItem}>
          <img src={cross} alt="" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="item">
        <label htmlFor={props.item.id}>
          <input
            id={props.item.id}
            type="checkbox"
            onClick={handleState}
          ></input>
        </label>
        <div className="container-p">
          <p className={`content ${style}`}>{props.item.title}</p>
        </div>
        <button onClick={handleDeleteItem}>
          <img src={cross} alt="" />
        </button>
      </div>
    );
  }
}
