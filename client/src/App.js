import React from 'react';

import InputTodo from './components/input-todo/InputTodo';
import TodoList from './components/todo-list/TodoList';

function App() {
  return (
    <div className="container">
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
