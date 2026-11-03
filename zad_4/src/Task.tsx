export interface TaskProps{
    is_finished: boolean;
    task_name: string;
}
export default function Task(props: TaskProps){
    
    return(<tr>
        <td><input type="checkbox" defaultChecked={props.is_finished}></input></td>
        <td>{props.task_name}</td>
        <td></td>
        <td></td>
    </tr>)
}