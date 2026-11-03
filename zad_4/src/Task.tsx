export interface TaskProps{
    task_id: number;
    is_finished: boolean;
    task_name: string;
}
export interface TaskElementProps{
    data: TaskProps;
    change_handler: (id: number) => void;
}
export default function Task(props: TaskElementProps){
    
    return(<tr>
        <td><input type="checkbox" defaultChecked={props.data.is_finished} onChange={() => props.change_handler(props.data.task_id)}></input></td>
        <td>{props.data.task_name}</td>
        <td></td>
        <td></td>
    </tr>)
}