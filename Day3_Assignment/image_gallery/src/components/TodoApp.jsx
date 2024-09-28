import React, { useState, useEffect } from "react";
import axios from "axios";  // Import Axios
import "./TodoApp.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Fetch tasks using axios
    axios.get("https://run.mocky.io/v3/16c30903-3570-44ea-a0e8-848cbeffc3a6")
      .then((response) => {
        setTasks(response.data);  // Set the tasks state with the response data
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), name: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // "all"
  });

  return (
    <div className="todo-container">
      <h1 className="header">React To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="input"
          onKeyUp={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span className="task-text">{task.name}</span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} className="filter-button">
          All
        </button>
        <button onClick={() => setFilter("pending")} className="filter-button">
          Pending
        </button>
        <button onClick={() => setFilter("completed")} className="filter-button">
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
