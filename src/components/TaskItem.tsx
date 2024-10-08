import React from 'react'

interface Task {
  id:number;
  title:string;
  completed:boolean;
}
interface TaskItemProps{
  task:Task;

}
const TaskItem:React.FC <TaskItemProps> = ({task}) => {
  return (
    <div><input type='checkbox'
    checked={task.completed} readOnly/>
    <span>{task.title}</span>
    </div>
  )
}

export default TaskItem
