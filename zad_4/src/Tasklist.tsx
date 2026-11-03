import type { ChangeEvent } from 'react';
import Task, {type TaskProps} from './Task';

interface TasklistProps{
    status_change_handler: (id: number) => void;
    filter_handler: (event: ChangeEvent)=> void;
    tasks: TaskProps[];
}

export default function Tasklist(props: TasklistProps){
    return(
        <>
        <div>
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