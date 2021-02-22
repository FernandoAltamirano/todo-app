import React from "react";

import "../styles/details.css";
export default function Details(props) {
  function deleteCompletedItems() {
    props.deleteCompleted();
  }
  return (
    <div className="details">
      <p className="counter">{props.counter} items left</p>
      <button onClick={deleteCompletedItems}>Clear Completed</button>
    </div>
  );
}
