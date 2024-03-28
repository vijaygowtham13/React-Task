import React, { useState } from 'react';
import EditTaskForm from './EditTaskForm';
import './TaskBox.css';
import './App.css';

const TaskItem = ({ task, updateStatus, deleteTask }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setShowEditForm(true);
  };

  const handleSave = (updatedTask) => {
    setEditedTask(updatedTask);
    setShowEditForm(false);
  };

  const handleCancel = () => {
    setShowEditForm(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setShowEditForm(false); // Close edit form if open
  };

  return (
    <div className="task-box">
      {showEditForm ? (
        <EditTaskForm task={editedTask} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <p><strong>Task Category:</strong> {editedTask.category}</p>
          <h3>{editedTask.title}</h3>
          <p><strong>Description:</strong> {editedTask.description}</p>
          <p><strong>Assignee:</strong> {editedTask.person}</p>
          <p><strong>Priority:</strong> {editedTask.priority}</p>
          <p><strong>Status:</strong> {editedTask.status}</p>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete} style={{ marginLeft: '8px' }}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
