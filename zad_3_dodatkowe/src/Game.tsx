import { useState } from 'react'
import './App.css'
import Board from './Board';
function App() {
  const [actual_board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(' ')))

  return (
    <Board Board_Table={actual_board}/>
  )
}

export default App
