import React, { useState } from "react";
import "../../styles/TaskInput.css";
import { postTodo } from "../endpoint/endPoints";

const TaskInput = ({ getTodoListByUser }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      addTodo();
      setInputValue("");
    }
  };

  const addTodo = async () => {
    const data = {
      label: inputValue,
      is_done: false,
    };
    await postTodo(data);
    getTodoListByUser();
  };

  return (
    <input
      type="text"
      className="task-input"
      placeholder="Que te hace falta hacer?"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};

export default TaskInput;
