import React from "react";
import ToDoItem from "./ToDoItem";
import "../../styles/ToDoList.css";
import { deleteTodo } from "../endpoint/endPoints";

const ToDoList = ({ tasks, getTodoListByUser }) => {
  const deleteTodoById = async (todoId) => {
    const res = await deleteTodo(todoId);
    getTodoListByUser();
  };

  return (
    <div className="todo-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={() => {
              deleteTodoById(task.id);
            }}
          />
        ))
      ) : (
        <p>No hay tareas, añadir tareas</p>
      )}
    </div>
  );
};

export default ToDoList;
