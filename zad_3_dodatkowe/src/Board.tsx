interface PropsTile{
    content: String;
    On_Click_Handler: React.MouseEventHandler<HTMLTableCellElement>;
}
function Tile(props: PropsTile){
    return(
        <td onClick={props.On_Click_Handler}>{props.content}</td>
    )
}




interface PropsBoard{
    Board_Table: String[][];
    Tile_Click_Handler:  React.MouseEventHandler<HTMLTableCellElement>;
}

function Board(props: PropsBoard){
    return (
        <>
            <table>
                {props.Board_Table.map(row => {
                    return (
                        <tr>
                            {row.map(element => {
                                return <Tile content={element} onClick={props.Tile_Click_Handler}/>
                            })
                            }
                        </tr>
                    )
                })}
            </table>
        </>
    );
}

export default Board