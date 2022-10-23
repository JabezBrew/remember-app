import React from "react";

function CreateArea({inputFunction, addButtonFunction, todo}) {


  return (
    <div>
      <form>
        <input name="title" onChange={inputFunction}  placeholder="Title" value={todo.title} />
        <textarea name="content" onChange={inputFunction} placeholder="Take a note..." value={todo.content} rows="3" />
        <button onClick={addButtonFunction}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
