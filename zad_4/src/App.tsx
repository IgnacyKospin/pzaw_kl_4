import { useState } from 'react'
import './App.css'
import TaskList from './Tasklist'
import { type TaskProps } from './Task'
const initTaskList: TaskProps[] = [
  {
    task_name: "a",
    is_finished: false
  }
]

function App() {
  const [tasks, setTasks] = useState(initTaskList);
  return (
    <>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
