import React from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import UserList from './components/UserList'

const App:React.FC = () => {
  return (
    <div className='App'>
      <h1>Task Manager & User List </h1>
      
      <AddTask/>
      <TaskList/>
      <UserList/>

    </div>
  )
}

export default App;

