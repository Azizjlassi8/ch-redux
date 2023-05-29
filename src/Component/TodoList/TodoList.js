import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task';

const TodoList = () => {
  const list = useSelector((state) => state.listReducer.ListeTasks);
  const [status, setStatus] = useState("All")
  return (
    <div>
      <button onClick={() => setStatus("All")} >All</button>
      <button onClick={() => setStatus("Done")}>Done</button>
      <button onClick={() => setStatus("UnDone")}>UnDone</button>
      <h2>List Tasks</h2>
        {status === "Done"
        ? list.filter((el) => el.isDone === true)
        .map(el => <Task task={el} key ={el.id} /> )
        : status === "UnDone"
        ? list
        .filter(el => el.isDone === false)
        .map(el => <Task task={el} key ={el.id} /> )

        :list.map(el => <Task task={el} key = {el.id} /> )}
    </div>
  );
};

export default TodoList
