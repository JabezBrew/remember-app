import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons'

function CreateArea({inputFunction, addButtonFunction, todo}) {


  return (
    <div>
      <form>
        <input name="title" onChange={inputFunction}  placeholder="Title" value={todo.title} />
        <textarea name="content" onChange={inputFunction} placeholder="Take a note..." value={todo.content} rows="3" />
          <button onClick={addButtonFunction}><FontAwesomeIcon icon={faSquareCheck} size={"lg"} className={"icons"} /></button>
      </form>
    </div>
  );
}

export default CreateArea;
