import React from 'react';
import './App.css'; // Import your main CSS file
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateStatus, deleteTask }) => {
  return (
    <div className="task-list-container"> {/* Apply container class */}
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={task.id} className="task-item-container"> {/* Apply container class */}
            <TaskItem task={task} updateStatus={updateStatus} deleteTask={deleteTask} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
