import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=> {
          props.delete(props.id);
      }}> <FontAwesomeIcon icon={faTrash} className={"icons"} /> </button>
    </div>
  );
}

export default Note;
