import React, { useState, useEffect } from 'react';

import EditTodo from '../edit-todo/EditTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  //Deleteting a todo
  const handleDelete = async (id) => {
    try {
      const delTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //Fetching all todo data
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              #
            </th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
            <th scope="col" className="text-center">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.todo_id}>
              <td>{index + 1}</td>
              <td>{todo.description}</td>
              <td className="text-center">
                <EditTodo todo={todo} />
              </td>
              <td className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
