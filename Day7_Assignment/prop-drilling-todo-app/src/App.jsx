import React, { useState } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Toggle completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Pass todos and toggleTodo down as props */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {/* Pass addTodo as prop to TodoForm */}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
