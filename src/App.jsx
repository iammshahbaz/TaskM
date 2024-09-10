import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
