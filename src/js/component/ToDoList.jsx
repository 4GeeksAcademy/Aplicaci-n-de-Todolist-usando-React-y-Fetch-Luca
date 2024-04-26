import React from 'react';
import ToDoItem from './ToDoItem';
import '../../styles/ToDoList.css';

const ToDoList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <ToDoItem key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} />
        ))
      ) : (
        <p>No hay tareas, añadir tareas</p>
      )}
    </div>
  );
};

export default ToDoList;
