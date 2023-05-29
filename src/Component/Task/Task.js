import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../../JS/Actions/todoLists';
import './Task.css';
import Edit from '../Edit/Edit';

const Task = ({task}) => {
    const dipsatch = useDispatch()
  return (
    <div>
        <span className={task.isDone ? "done" : null}>{task.text}</span>
        <Edit task={task}/>
        <button onClick={() => dipsatch (deleteTask(task.id))} >Delete</button>
        <button onClick={() => dipsatch(doneTask(task.id))} >
          {task.isDone ? "Undone" : "Done"}
          </button>
    </div>
  )
}

export default Task