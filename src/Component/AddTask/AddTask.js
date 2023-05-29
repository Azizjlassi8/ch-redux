import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/Actions/todoLists';

const AddTask = () => {
  const [text, setText] = useState("");
  const dipsatch = useDispatch(); 

  const handleAdd  = (e) => {
    e.preventDefault()
    if (text) {
      dipsatch(addTask({id: Math.random(), text, isDone: false }));
      setText("")
    } else {
      alert("Can not add an empty text !");
    }
  }; 
  return (
    <div>
      <h2>Add Task</h2>
        <Form onSubmit={handleAdd}>
        <Form.Control type='text' placeholder='Enter task' value={text} onChange={(e) => setText(e.target.value)}/>
        <Button variant='primary' type='submit' onClick={handleAdd}>
        Submit
      </Button>
      </Form>
    </div>
  );
};

export default AddTask;
