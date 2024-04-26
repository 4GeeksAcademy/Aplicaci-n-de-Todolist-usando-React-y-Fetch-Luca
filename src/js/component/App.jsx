import React, { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import TaskInput from './TaskInput';
import '../../styles/App.css';  

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      
        fetch('https://playground.4geeks.com/todo/users/carlosluca', {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            setTasks(data || []);  
        })
        .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const syncTasks = () => {
        
        fetch('https://playground.4geeks.com/todo/users/carlosluca', {
            method: 'PUT',
            body: JSON.stringify(tasks),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => console.log('Tasks synchronized:', data))
        .catch(error => console.error('Error syncing tasks:', error));
    };

    const addTask = (taskText) => {
        const newTask = { id: Date.now(), text: taskText, done: false };
        setTasks(prevTasks => [...prevTasks, newTask]);
        syncTasks();
    };

    const deleteTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
        syncTasks();
    };

    return (
        <div className="app-container">
            <h1>Todo List</h1>
            <TaskInput onAddTask={addTask} />
            <ToDoList tasks={tasks} onDeleteTask={deleteTask} />
        </div>
    );
};

export default App;
