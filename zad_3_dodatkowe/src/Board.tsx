interface PropsTile{
    content: string;
    On_Click_Handler: React.MouseEventHandler<HTMLTableCellElement>;
}
function Tile(props: PropsTile){
    return(
        <td onClick={props.On_Click_Handler}>{props.content}</td>
    )
}


interface PropsBoard{
    Board_Table: string[][];
    Tile_Click_Handler:  React.MouseEventHandler<HTMLTableCellElement>;
}

function Board(props: PropsBoard){
    return (
        <>
            <table>
                <tbody>
                {props.Board_Table.map(row => {
                    return (
                        <tr>
                            {row.map(element => {
                                return <Tile content={element} On_Click_Handler={props.Tile_Click_Handler}/>
                            })
                            }
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
}

export default Board