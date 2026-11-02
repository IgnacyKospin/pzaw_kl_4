interface PropsTile{
    content: string;
    row: number;
    column: number;
    On_Click_Handler: (row: number, column: number) => void;
}
function Tile(props: PropsTile){
    return(
        <td onClick={() => props.On_Click_Handler(props.row, props.column)}>{props.content}</td>
    )
}


interface PropsBoard{
    Board_Table: string[][];
    Tile_Click_Handler:  (row: number, column: number) => void;
}

function Board(props: PropsBoard){
    return (
            <table>
                <tbody>
                {props.Board_Table.map((row, row_index) => {
                    return (
                        <tr key={row_index}>
                            {row.map((element, col_index) => {
                                return <Tile key={col_index} row={row_index} column={col_index} content={element} On_Click_Handler={props.Tile_Click_Handler}/>
                            })
                            }
                        </tr>
                    )
                })}
                </tbody>
            </table>
    );
}

export default Board