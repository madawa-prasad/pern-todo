import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditTodo = (props) => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(props.todo.description);

  const handleClose = () => {
    setShow(false);
    setDescription(props.todo.description);
  };
  const handleShow = () => setShow(true);

  //Editting existing todos
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${props.todo.todo_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Add todo"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleEdit(e)}>
            Save todo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTodo;
