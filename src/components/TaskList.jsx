import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../store';

const Task = React.lazy(() => import('./Task'));

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    console.log('TaskList mounted');
    return () => {
      console.log('TaskList unmounted');
    };
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <Suspense fallback={<div>Loading tasks...</div>}>
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={handleDelete} />
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default TaskList;
