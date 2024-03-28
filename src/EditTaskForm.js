// EditTaskForm.js
import React, { useState } from 'react';

const EditTaskForm = ({ task, onSave, onCancel }) => {
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    onSave({ ...task, priority, status });
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
      <p><strong>Task Category:</strong> {task.category}</p>
      <label>Title:</label>
      <input type="text" value={task.title} readOnly />
      <label>Description:</label>
      <textarea value={task.description} readOnly />
      <label>Assignee:</label>
      <input type="text" value={task.person} readOnly />
      <label>Priority:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditTaskForm;
