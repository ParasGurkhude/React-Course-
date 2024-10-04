import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoProvider';
import '../styles/TodoList.css'


export const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
      <ul id='list'>
        {todos.map((todo, i) => (
          <li key={i+1}>{todo.text}</li>
        ))}
      </ul>
    );
}
