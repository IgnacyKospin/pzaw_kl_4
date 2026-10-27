import { useState } from 'react'
const boardTemplate = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];
function Game(){
    function updateBoard(x_cord: number, y_cord: number, value: string){
        var board_new = board;
        board_new[y_cord][x_cord] = value;
        setBoard(board_new);
    }
    function verifyVictory(){

        return false;
    }
    const [curPlayer, setPlayer] = useState('O');
    const [board, setBoard] = useState(boardTemplate);

}
export default Game