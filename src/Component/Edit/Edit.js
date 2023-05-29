import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, } from 'react-redux';
import { editTask } from '../../JS/Actions/todoLists';

const Edit = ({ task }) => {
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState(task.text);
    const dipsatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = () => {
        dipsatch(editTask(task.id , newTask));
        handleClose();
    };

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type='text' placeholder='edit task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit