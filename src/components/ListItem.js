import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
  const [editeditem, setediteditem] = useState(props.item);
  const [editmode, seteditmode] = useState(false);
  const editeditemchanged = (evt) => {
    setediteditem(evt.target.value);
  };
  const saveediteditem = () => {
    props.edithandler(editeditem, props.idx);
    seteditmode(false);
  };
  return (
    <div className="list">
      {editmode ? (
        <>
          <textarea
            className="editTask"
            onChange={editeditemchanged}
            value={editeditem}
            placeholder="edittask"
          ></textarea>
          <button
            className="saveTask"
            onClick={saveediteditem}
            disabled={editeditem.trim().length === 0}
          >
            save task
          </button>
        </>
      ) : (
        <>
          {props.item}
          <button className="edit" onClick={() => seteditmode(true)}>
            edit
          </button>
          <button
            className="delete"
            onClick={() => props.deleteHandler(props.idx)}
          >
            delete
          </button>
        </>
      )}
    </div>
  );
}

export default ListItem;
