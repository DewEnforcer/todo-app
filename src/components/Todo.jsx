import React from 'react';

function Todo({todo, onChange, onDelete}) {
  const cls = todo.finished ? "todo_done" : "";
  const clsBtn = todo.finished ? "btn btn-success" : "btn btn-danger";

    return (
    <div className="todo_container">
        <span className={cls}>{todo.description}</span>
        <input type="checkbox" checked={todo.finished} onChange={() => onChange(todo._id)}></input>
        <button className={clsBtn} onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  )
}

export default Todo;