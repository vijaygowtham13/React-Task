import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskTrackerApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description of Task 1', person: 'John Doe', priority: 'High', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Description of Task 2', person: 'Jane Doe', priority: 'Medium', status: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Description of Task 3', person: 'Alice Smith', priority: 'Low', status: 'Completed' },
    { id: 4, title: 'Task 4', description: 'Description of Task 4', person: 'Bob Johnson', priority: 'High', status: 'Pending' },
    { id: 5, title: 'Task 5', description: 'Description of Task 5', person: 'Eva Brown', priority: 'Medium', status: 'In Progress' }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const updateStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: status } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateStatus={updateStatus} />
    </div>
  );
};

export default TaskTrackerApp;
