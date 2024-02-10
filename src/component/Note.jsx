import React, { useState } from "react";
import EditNote from "./EditNote";

function Note(props) {
  const [isEditing, setEditing] = useState(false);

  const openEdit = () => {
    setEditing(true);
  };

  const closeEdit = () => {
    setEditing(false);
  };

  return isEditing ? (
    <EditNote
      id={props.id}
      title={props.title}
      content={props.content}
      onEdit={(id, editedNote) => {
        props.onEdit(id, editedNote);
        closeEdit();
      }}
    />
  ) : (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="edit-button" onClick={openEdit}>Edit</button>
      <button className="delete-button" onClick={() => props.onDelete(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
