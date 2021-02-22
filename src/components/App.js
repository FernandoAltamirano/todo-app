import React, { useState, useEffect } from "react";
import Header from "./Header";
import Input from "./Input";
import List from "./List";
import Filter from "./Filter";

import MessageFooter from "./MessageFooter";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(items.length);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    setCounter(items.length);
  }, [items, filter]);

  function createNewItem(newItem) {
    setItems([...items, { id: uuidv4(), title: newItem, active: true }]);
    setCounter(items.length);
  }

  function deleteItem(id) {
    let newItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== id) {
        newItems.push(items[i]);
      }
    }
    setItems(newItems);
    setCounter(items.length);
  }
  function deleteCompleted() {
    let newItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        newItems.push(items[i]);
      }
    }
    setCounter(newItems.length);
    setItems(newItems);
  }

  function handleFilter(filter) {
    setFilter(filter);
  }

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Input createNewItem={createNewItem} />
        <List
          items={items}
          deleteItem={deleteItem}
          deleteCompleted={deleteCompleted}
          counter={counter}
          filter={filter}
        />
        <Filter handleFilter={handleFilter} />
      </div>
      <MessageFooter />
    </div>
  );
}

export default App;
