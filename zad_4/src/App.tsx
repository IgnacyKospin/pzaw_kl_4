import { useState, type ChangeEvent } from 'react'
import './App.css'
import TaskList from './Tasklist'
import { type TaskProps } from './Task'
const initTaskList: TaskProps[] = [
  {
    task_id: 1,
    task_name: "a",
    is_finished: false
  },
  {
    task_id: 2,
    task_name: "b",
    is_finished: true
  }
]

function App() {
  const [tasks, setTasks] = useState(initTaskList);
  const [id_counter, updateIdCounter] = useState(Math.max.apply(Math, tasks.map(function(t: TaskProps) {return t.task_id}))); //stores current id
  const [current_filter, setCurrentFilter] = useState<'all'|'finished'|'unfinished'>('all');
  const [current_sorter, setCurrentSort] = useState<'alphabetically'|'by_state'|'default'>('default');
  function changeTaskStatus(id: number){
    var newTasks = [...tasks];
    var changing_task : number = newTasks.findIndex(task => task.task_id === id);
    if(changing_task != -1){
      newTasks[changing_task].is_finished = !newTasks[changing_task].is_finished;
    }
    console.log("reached");
    setTasks(newTasks);
  }
  function createTask(new_task_name: string){
    const new_id = id_counter+1;
    const new_task : TaskProps= {
      task_id: new_id,
      task_name: new_task_name,
      is_finished: false
    }
    var newTasks = [...tasks,  new_task];
    updateIdCounter(id_counter+1);
    setTasks(newTasks);
  }
  function filterHandler(event: ChangeEvent){
    const new_filter = event.currentTarget.value; //it may give an error in here but it works
    setCurrentFilter(new_filter);
  }
  function sortHandler(event: ChangeEvent){
    const new_sort = event.currentTarget.value;
    setCurrentSort(new_sort);
  }
  function sumUnfinishedTasks(){
    var temp_for_counting = [...tasks];
    return temp_for_counting.filter(task => task.is_finished !== true).length;
  }
  /**filter */
  var tasks_to_display: TaskProps[] = [...tasks];
  switch(current_filter){
    case 'all':
      break;
    case 'finished':
      tasks_to_display = tasks_to_display.filter(task => task.is_finished === true);
      break;
    case 'unfinished':
      tasks_to_display = tasks_to_display.filter(task=> task.is_finished === false);
      break;
  }
  /**sort */
  switch(current_sorter){
    case 'alphabetically':
      tasks_to_display = tasks_to_display.sort((a,b) => a.task_name.localeCompare(b.task_name));
      break;
    case 'by_state':
      tasks_to_display = tasks_to_display.sort((a,b)=> Number(a.is_finished) - Number(b.is_finished));
      break;
    case 'default':
      break;
  }
  return (
    <>
      <h1>Unfinished tasks: {sumUnfinishedTasks()}</h1>
      <TaskList tasks={tasks_to_display} status_change_handler={changeTaskStatus} filter_handler={filterHandler} sort_handler={sortHandler}/>
    </>
  )
}

export default App
