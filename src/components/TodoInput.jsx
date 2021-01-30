import React from 'react';

function TodoInput({onClick, onChange, value}) {
    return (
        <div className="new_todo_box">
            <input type="text" value={value} onChange={onChange} placeholder="Describe your next todo..."></input>
            <button className="btn btn-primary" onClick={onClick}>Add TODO!</button>
        </div>
    );
}

export default TodoInput;