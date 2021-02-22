import React, { useState } from "react";
import "../styles/input.css";
export default function Input(props) {
  const [item, setItem] = useState("");
  function handleKeyPress(e) {
    if (e.key === "Enter" && e.target.value !== "") {
      props.createNewItem(item);
      setItem("");
      document.getElementById("input").value = "";
    }
  }

  function handleChange(e) {
    setItem(e.target.value);
  }
  return (
    <div className="input" onKeyPress={handleKeyPress}>
      <input
        onChange={handleChange}
        id="input"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
}
