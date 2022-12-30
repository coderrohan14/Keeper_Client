import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  const { _id, title, content } = props.currNote;

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button type="submit" onClick={(event) => {
        props.onDelete(_id);

        event.preventDefault();
      }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
