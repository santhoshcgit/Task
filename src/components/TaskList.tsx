import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store';
import { fetchTasks } from '../features/taskSlice';
import TaskItem from './TaskItem';


interface Task{
  id:number;
  title:string;
  completed:boolean;
}
const TaskList:React.FC = () => {
  const {tasks,loading}=useSelector((state: RootState)=>state.tasks);
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(fetchTasks());
  },[dispatch]);
  if(loading){
    return <p>Loading tasks...</p>
  }
  return (
    <div>
      {
        tasks.map((task: Task)=>(
          <TaskItem key={task.id}
          task={task}/>
        ))
      }
    </div>
  )
}

export default TaskList
