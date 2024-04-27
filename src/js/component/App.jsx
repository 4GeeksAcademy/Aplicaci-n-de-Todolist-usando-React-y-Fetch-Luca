import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import TaskInput from "./TaskInput";
import "../../styles/App.css";
import "../../styles/ToDoList.css";
import { deleteTodo, getList } from "../endpoint/endPoints";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTodoListByUser();
  }, []);

  const getTodoListByUser = async () => {
    const res = await getList();
    console.log(res);
    setTasks(res.todos || []);
  };

  const deleteAllList = async () => {
    try {
      const deletePromises = tasks.map(async (todo) => {
        await deleteTodo(todo.id);
      });

      await Promise.all(deletePromises);

      await getTodoListByUser();
    } catch (error) {
      console.error("Error al eliminar los to-dos:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <button
        className="clear-button"
        onClick={() => {
          deleteAllList();
        }}
      >
        Limpiar lista 🗑️
      </button>
      <TaskInput getTodoListByUser={getTodoListByUser} />
      <ToDoList tasks={tasks} getTodoListByUser={getTodoListByUser} />
    </div>
  );
};

export default App;
