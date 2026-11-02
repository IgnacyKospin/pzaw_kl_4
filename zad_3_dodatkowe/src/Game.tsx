import { useState, type MouseEventHandler } from 'react'
import './App.css'
import Board from './Board';
function App() {
  const [actual_board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(' ')))
  function handle_click(event: React.MouseEvent<HTMLTableCellElement>){

  }
  return (
    <Board Board_Table={actual_board} Tile_Click_Handler={handle_click}/>
  )
}

export default App
