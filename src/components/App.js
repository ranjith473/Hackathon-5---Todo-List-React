import React, { useState } from "react";
import ListItem from "./ListItem";
import "./../styles/App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newitem, setnewItem] = useState("");
  const additem = () => {
    items.push(newitem);
    setItems([...items]);
    setnewItem("");
  };
  const newitemchanged = (evt) => {
    setnewItem(evt.target.value);
  };
  const deleteHandler = (itemIdx) => {
    items.splice(itemIdx, 1);
    setItems([...items]);
  };
  const edithandler = (editedvalue, itemIdx) => {
    items[itemIdx] = editedvalue;
    setItems([...items]);
  };
  return (
    <div id="main">
      <textarea
        id="task"
        onChange={newitemchanged}
        placeholder="add item"
        value={newitem}
      ></textarea>
      <button id="btn" onClick={additem} disabled={newitem.trim().length === 0}>
        Add
      </button>
      {items.map((item, idx) => (
        <ListItem
          item={item}
          key={`${item}_${idx}`}
          idx={idx}
          edithandler={edithandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}

export default App;
