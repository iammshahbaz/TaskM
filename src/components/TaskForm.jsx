import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const taskInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name: taskName,
    };

    dispatch(addTask(newTask));
    setTaskName('');

    taskInputRef.current.value = '';
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task"
          required
        />

        
        <input ref={taskInputRef} type="text" placeholder="Uncontrolled input" />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
