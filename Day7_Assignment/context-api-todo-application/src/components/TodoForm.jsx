import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoProvider';
import '../styles/TodoForm.css'

export default function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      text: todo
    });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} id='container'>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter task..."
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
}
