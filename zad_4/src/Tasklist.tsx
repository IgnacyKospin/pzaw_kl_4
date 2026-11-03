import Task, {type TaskProps} from './Task';

interface TasklistProps{
    tasks: TaskProps[];
}

export default function Tasklist(props: TasklistProps){
    return(
        <table>
            <tbody>
                {
                    props.tasks.map(task => {
                        return <Task {...task}/>
                    })
                }
            </tbody>
        </table>

    )
}