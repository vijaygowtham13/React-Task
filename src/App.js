// App.js
import React, { useState } from 'react';
import TaskTrackerApp from './TaskTrackerApp';
import './App.css';

function App() {
  // Define deleteTask function
  const deleteTask = (taskId) => {
    // Implement delete task logic here
    console.log('Deleting task with ID:', taskId);
    // You may also update the tasks state here if needed
  };

  return (
    <div className="App">
      {/* Pass deleteTask function as prop to TaskTrackerApp */}
      <TaskTrackerApp deleteTask={deleteTask} />
    </div>
  );
}

export default App;
