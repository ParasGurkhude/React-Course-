import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  return (
    <li 
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
