import { useState, type MouseEventHandler } from 'react'
import './App.css'
import Board from './Board';
function App() {
  const [actual_board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(' ')));
  const [actual_player, setPlayer] = useState('O');
  const [game_active, setGameActive] = useState(false);
  const [victor, setVictor] = useState(false);
  function game_control(){
    setPlayer(actual_player === 'O' ? 'X' : 'O');
    var res = check_win();
    console.log(res);
    if(res){
      setVictor(res);
      setGameActive(false);
    }
  }
  function start_or_reset_game(){
    setPlayer('O');
    setVictor(false);
    setGameActive(true);
    setBoard(Array(3).fill(null).map(() => Array(3).fill(' ')));
  }
  function handle_click(row: number, column: number){
    if(game_active){
      var tile = actual_board[row][column];
      if(tile == ' '){
        var new_board = actual_board.map(row => [...row]);
        new_board[row][column] = actual_player;
        setBoard(new_board);
        game_control();
      }
    }
  }
  function check_win(){
    const victory_conditions = [
      [actual_board[0][0], actual_board[0][1], actual_board[0][2]],
      [actual_board[1][0], actual_board[1][1], actual_board[1][2]],
      [actual_board[2][0], actual_board[2][1], actual_board[2][2]],

      [actual_board[0][0], actual_board[1][0], actual_board[2][0]],
      [actual_board[0][1], actual_board[1][1], actual_board[2][1]],
      [actual_board[0][2], actual_board[1][2], actual_board[2][2]],

      [actual_board[0][0], actual_board[1][1], actual_board[2][2]],
      [actual_board[2][0], actual_board[1][1], actual_board[0][2]],
    ];
    for(var condition of victory_conditions){
      if(condition[0] != ' ' && condition[0] == condition[1] && condition[1] == condition[2]){
        return condition[0];
      }
    }
    return false;
  }
  return (
    <>
      <h1>{victor && `Player ${victor} has won.`}</h1>
        <Board Board_Table={actual_board} Tile_Click_Handler={handle_click}/>
      <button onClick={start_or_reset_game}>{game_active && "Reset"}{!game_active && "Start"}</button>
    </>
  )
}

export default App
