import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <input type="submit" value="Add"/>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
