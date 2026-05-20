import { useState } from "react";
import "./styles/TodoForm.css";

function TodoForm({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addTask(input);
    setInput("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;