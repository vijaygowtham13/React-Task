import React, { useState } from 'react';

const TaskEditFrame = ({ task, updateTask, onClose }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handlePriorityChange = (e) => {
    setEditedTask({ ...editedTask, priority: e.target.value });
  };

  const handleStatusChange = (e) => {
    setEditedTask({ ...editedTask, status: e.target.value });
  };

  const handleSave = () => {
    // Implement save functionality here
    updateTask(editedTask);
    onClose();
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
      <p><strong>Task Category:</strong> {editedTask.category}</p>
      <p><strong>Task Title:</strong> {editedTask.title}</p>
      <p><strong>Description:</strong> {editedTask.description}</p>
      <p><strong>Assignee:</strong> {editedTask.person}</p>
      <p>
        <strong>Priority:</strong> 
        <select value={editedTask.priority} onChange={handlePriorityChange} disabled>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>
      <p>
        <strong>Status:</strong> 
        <select value={editedTask.status} onChange={handleStatusChange} disabled>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Deployed">Deployed</option>
          <option value="Deferred">Deferred</option>
        </select>
      </p>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TaskEditFrame;
