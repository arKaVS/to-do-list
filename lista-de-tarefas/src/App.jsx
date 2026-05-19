import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1>To-Do List</h1>

        <TodoForm addTask={addTask} />

        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;