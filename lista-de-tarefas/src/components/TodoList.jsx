import { useEffect, useRef } from "react";
import TodoItem from "./TodoItem";
import "./styles/TodoList.css";

function TodoList({ tasks, deleteTask, toggleTask }) {
  const bottomRef = useRef(null);
  const previousLength = useRef(tasks.length);

  useEffect(() => {
    if (tasks.length > previousLength.current) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }

    previousLength.current = tasks.length;
  }, [tasks]);

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

      <div ref={bottomRef}></div>
    </div>
  );
}

export default TodoList;