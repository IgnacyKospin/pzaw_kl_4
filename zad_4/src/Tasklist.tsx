import Task, {type TaskProps} from './Task';

interface TasklistProps{
    status_change_handler: (id: number) => void;
    tasks: TaskProps[];
}

export default function Tasklist(props: TasklistProps){
    return(
        <table>
            <tbody>
                {
                    props.tasks.map(task => {
                        return <Task key={task.task_id} data={task} change_handler={props.status_change_handler}/>
                    })
                }
            </tbody>
        </table>

    )
}