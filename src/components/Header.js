import React from "react";
import "../styles/header.css";
import Switch from "./Switch";
export default function Header() {
  return (
    <div className="header" id="id_header">
      <h1 className="header-title">TODO</h1>
      <Switch />
    </div>
  );
}
