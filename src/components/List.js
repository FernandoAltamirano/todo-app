import React from "react";
import Details from "./Details";
import "../styles/list.css";
import Item from "./Item";
export default function List(props) {
  const data = props.items;
  if (props.filter === "active") {
    return (
      <React.Fragment>
        <div className="list">
          {data
            .slice(0)
            .reverse()
            .map((item) => {
              if (item.active) {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    deleteItem={props.deleteItem}
                  />
                );
              }
            })}
          <Details
            deleteCompleted={props.deleteCompleted}
            counter={props.counter}
          />
        </div>
      </React.Fragment>
    );
  } else if (props.filter === "completed") {
    return (
      <React.Fragment>
        <div className="list">
          {data
            .slice(0)
            .reverse()
            .map((item) => {
              if (!item.active) {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    deleteItem={props.deleteItem}
                  />
                );
              }
            })}
          <Details
            deleteCompleted={props.deleteCompleted}
            counter={props.counter}
          />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="list">
          {data
            .slice(0)
            .reverse()
            .map((item) => {
              return (
                <Item key={item.id} item={item} deleteItem={props.deleteItem} />
              );
            })}
          <Details
            deleteCompleted={props.deleteCompleted}
            counter={props.counter}
          />
        </div>
      </React.Fragment>
    );
  }
}
