import React, { useState } from 'react';
import {useDispatch }from 'react-redux';
import { addTask } from '../features/taskSlice';

const AddTask:React.FC = () => {
    const [title,setTitle]=useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        if(title){
            dispatch(addTask(title));
            setTitle("");
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='Add a new task'
            />
            <button type='submit'>Add Task</button>
        </form>
      
    </div>
  )
}

export default AddTask
