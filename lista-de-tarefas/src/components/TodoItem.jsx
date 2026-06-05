import { useState } from "react";
import "./styles/TodoItem.css";

function TodoItem({ task, deleteTask, toggleTask, updateDescription }) {
  const [showDescription, setShowDescription] =
    useState(false);

  return (
    <div className="todo-item">
      <div className="todo-content">
        <div className="todo-top">
          <span
            className={task.completed ? "completed" : ""}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>

          <div className="todo-buttons">
            <button
              className="description-btn"
              onClick={() =>
                setShowDescription(!showDescription)
              }
            >
              {showDescription ? "Fechar" : "Descrição"}
            </button>

            <button
              className="remove-btn"
              onClick={() => deleteTask(task.id)}
            >
              Remover
            </button>
          </div>
        </div>

        {showDescription && (
          <textarea
            className="description-input"
            placeholder="Digite uma descrição..."
            value={task.description || ""}
            onChange={(e) =>
              updateDescription(
                task.id,
                e.target.value
              )
            }
          />
        )}

      </div>
    </div>
  );
}

export default TodoItem;