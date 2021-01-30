import React,  { useEffect, useState } from 'react';
import Joi from "joi-browser";
import {toast} from "react-toastify";
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import {createTodo, getTodos, removeTodo, saveTodo} from '../services/todoservice';

function Todos() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("");
  const schema = {
    description: Joi.string().min(3).required(),
    finished: Joi.boolean().required()
  }

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const {data} = await getTodos();
        setTodos(data);
      } catch (error) {
        toast.error("An error has occured while retrieving your todos:(")
      }
    }
    fetchTodos();
  }, [])

  const handleSubmitTodo = async () => {
    let todoObj = {
      description: newTodo,
      finished: false
    }

    const {error} = Joi.validate(todoObj, schema)
    if (error) return;
    try {
      const {data} = await createTodo(todoObj);
      const newTodos = [...todos];
      newTodos.push(data);
      setTodos(newTodos); 
    } catch (error) {
      if (error.response && error.response.status === 400) return toast.error(error.response.data);
    }
  }
  const handleToggleTodo = async (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((t) => t._id === id)
    console.log(todo);
    if (!todo) return;

    todo.finished = !todo.finished;

    const {data} = await saveTodo(id, todo);

    setTodos(newTodos);
  }
  const handleDeleteTodo = async (id) => {
    const todoCopy = [...todos];
    const newTodos = todoCopy.filter((t) => t._id !== id);

    setTodos(newTodos);

    try {
      await removeTodo(id);
    } catch (error) {
      setTodos(todoCopy);
      if (error.response && error.response.status === 404) toast.error(error.response.data);
    }
  }
  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  }
    return (
        <>
            <TodoInput onClick={handleSubmitTodo} onChange={handleNewTodoChange} value={newTodo}/>
            <TodoList todos={todos} onChange={handleToggleTodo} onDelete={handleDeleteTodo}/>
        </>
    );
}

export default Todos;