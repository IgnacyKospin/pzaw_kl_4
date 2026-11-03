import type { ChangeEvent } from 'react';
import Task, {type TaskProps} from './Task';
interface TasklistProps{
    status_change_handler: (id: number) => void;
    filter_handler: (event: ChangeEvent)=> void;
    sort_handler: (event: ChangeEvent)=>void;
    add_new_task_handler: (event: React.SubmitEvent)=>void;
    tasks: TaskProps[];
}

export default function Tasklist(props: TasklistProps){
    return(
        <>
        <div>
            <h1>Filter</h1>
            <label>
                <input type='radio' value='all' name='filterByStatus' defaultChecked={true} onChange={(e) => props.filter_handler(e)} /> All
            </label>
            <label>
                <input type='radio' value='finished' name='filterByStatus' onChange={(e) => props.filter_handler(e)} /> Finished
            </label>
            <label>
                <input type='radio' value='unfinished' name='filterByStatus' onChange={(e) => props.filter_handler(e)} /> Unfinished
            </label>
        </div>
        <div>
            <h1>Sort</h1>
            <label>
                <input type='radio' value='default' name='filterByStatus' defaultChecked={true} onChange={(e) => props.sort_handler(e)} /> default
            </label>
            <label>
                <input type='radio' value='alphabetically' name='filterByStatus' onChange={(e) => props.sort_handler(e)} /> Alphabetically
            </label>
            <label>
                <input type='radio' value='by_state' name='filterByStatus' onChange={(e) => props.sort_handler(e)} /> BY State (unfinishe dfirst)
            </label>
        </div>
        <div>
            <form onSubmit={e => {props.add_new_task_handler(e); e.preventDefault()}}>
                <h1>new task</h1>
                <input type='name' name='new_task_name'></input>
                <button >add</button>
            </form>
        </div>
        <table>
            <tbody>
                {
                    props.tasks.map(task => {
                        return <Task key={task.task_id} data={task} change_handler={props.status_change_handler}/>
                    })
                }
            </tbody>
        </table>
        </>
    )
}