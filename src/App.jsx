import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Todo from './components/todo/Todo';

const App = () => {
  return (
    <div>
      <Todo />
      <Routes>
        <Route path='/' element={<Todo />} />
      </Routes>
    </div>
  );
};
export default App;
