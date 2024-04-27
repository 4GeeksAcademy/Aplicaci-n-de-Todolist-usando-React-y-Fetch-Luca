import React, { useState } from "react";
import "../../styles/ToDoItem.css";

const ToDoItem = ({ task, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="todo-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {task.label}
      {isHovered && (
        <button className="delete-button" onClick={onDelete}>
          🗑️
        </button>
      )}
    </div>
  );
};

export default ToDoItem;
