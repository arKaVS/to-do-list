import "../styles/TodoItem.css";

function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="todo-item">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        Remover
      </button>
    </div>
  );
}

export default TodoItem;