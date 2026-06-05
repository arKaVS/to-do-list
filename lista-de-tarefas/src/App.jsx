import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import { getUserId } from "./lib/userId";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const userId = getUserId();

    const { data, error } =
      await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", userId)
        .order("created_at");

    if (!error) {
      setTasks(data);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask(text) {
    if (!text.trim()) return;

    const userId = getUserId();

    const { data, error } =
      await supabase
        .from("tasks")
        .insert({
          user_id: userId,
          text,
        })
        .select();

    if (!error) {
      setTasks([...tasks, data[0]]);
    }
  }

  async function deleteTask(id) {

    await supabase
      .from("tasks")
      .delete()
      .eq("id", id);

    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  }

  async function toggleTask(id) {

    const task =
      tasks.find(
        (task) => task.id === id
      );

    const updated =
      !task.completed;

    await supabase
      .from("tasks")
      .update({
        completed: updated,
      })
      .eq("id", id);

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: updated,
            }
          : task
      )
    );
  }

  async function updateDescription(
    id,
    description
  ) {

    await supabase
      .from("tasks")
      .update({ description })
      .eq("id", id);

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, description }
          : task
      )
    );
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Lista de Tarefas</h1>

        <TodoForm addTask={addTask} />

        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          updateDescription={updateDescription}
        />
      </div>
    </div>
  );
}

export default App;