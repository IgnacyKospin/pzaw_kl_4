import { useState, type MouseEventHandler } from 'react'
import './App.css'
import Board from './Board';
function App() {
  const [actual_board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(' ')));
  const [actual_player, setPlayer] = useState('O');
  function handle_click(row: number, column: number){
    var tile = actual_board[row][column];
    if(tile == ' '){

    }
  }
  return (
    <Board Board_Table={actual_board} Tile_Click_Handler={handle_click}/>
  )
}

export default App
