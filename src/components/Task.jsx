import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <li>
      {task.name} <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
