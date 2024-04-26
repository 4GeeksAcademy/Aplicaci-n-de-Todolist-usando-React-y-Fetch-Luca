import React, { useState } from 'react';
import '../../styles/TaskInput.css';

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue('');
    }
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
