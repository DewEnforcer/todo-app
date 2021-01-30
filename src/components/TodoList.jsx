import React from 'react';
import Todo from './Todo';

function TodoList({todos, onChange, onDelete}) {
    return (
    <div className="todos_list">
        {todos.map((t) => <Todo key={t._id} todo={t} onChange={onChange} onDelete={onDelete}/>)}
    </div>
    );
}

export default TodoList;