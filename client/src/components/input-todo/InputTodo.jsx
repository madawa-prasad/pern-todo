import React from 'react';
import { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">PERN TODO APP</h1>
      <form className="d-flex mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Any task?"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success ms-2">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
