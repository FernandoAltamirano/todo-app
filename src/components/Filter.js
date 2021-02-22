import React from "react";

import "../styles/filter.css";
const Filter = (props) => {
  function handleClick(e) {
    props.handleFilter(e.target.id);
  }
  return (
    <div className="filter">
      <input type="radio" id="all" name="filter" onClick={handleClick} />
      <label htmlFor="all" id="label-all">
        All
      </label>
      <input type="radio" name="filter" id="active" onClick={handleClick} />
      <label htmlFor="active" id="label-active">
        Active
      </label>
      <input type="radio" name="filter" id="completed" onClick={handleClick} />
      <label htmlFor="completed" id="label-completed">
        Completed
      </label>
    </div>
  );
};

export default Filter;
