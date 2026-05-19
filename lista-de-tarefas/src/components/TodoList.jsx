import TodoItem from "./TodoItem";
import "./styles/TodoList.css";

function TodoList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa adicionada.</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;