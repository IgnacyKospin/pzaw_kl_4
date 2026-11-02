import { useState, type MouseEventHandler } from 'react'
import './App.css'
import Board from './Board';
function App() {
  const [actual_board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(' ')));
  const [actual_player, setPlayer] = useState('O');
  const [game_active, setGameActive] = useState(false);
  const [victor, setVictor] = useState(' ');
  function game_control(new_board: string[][]){ //weird async thing so ineed to do it like this so it checks immediately. i could've called it direclty in clicker but whatever
    setPlayer(actual_player === 'O' ? 'X' : 'O');
    var res = check_win(new_board);
    console.log(res);
    if(res != ' '){
      setVictor(res);
      setGameActive(false);
    }
  }
  function start_or_reset_game(){
    setPlayer('O');
    setVictor(' ');
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
        game_control(new_board);
      }
    }
  }
  function check_win(board_new: string[][]){
    const victory_conditions = [
      [board_new[0][0], board_new[0][1], board_new[0][2]],
      [board_new[1][0], board_new[1][1], board_new[1][2]],
      [board_new[2][0], board_new[2][1], board_new[2][2]],

      [board_new[0][0], board_new[1][0], board_new[2][0]],
      [board_new[0][1], board_new[1][1], board_new[2][1]],
      [board_new[0][2], board_new[1][2], board_new[2][2]],

      [board_new[0][0], board_new[1][1], board_new[2][2]],
      [board_new[2][0], board_new[1][1], board_new[0][2]],
    ];
    for(var condition of victory_conditions){
      if(condition[0] != ' ' && condition[0] == condition[1] && condition[1] == condition[2]){
        return condition[0];
      }
    }
    return ' ';
  }
  return (
    <div className='main'>
      <h2>{!game_active && 'Game inactive, press start.'}</h2>
      <h2>Current player: {actual_player}</h2>
      <h1>{victor != ' '&& `Player ${victor} has won.`}</h1>
      
        <Board Board_Table={actual_board} Tile_Click_Handler={handle_click}/>
      <button onClick={start_or_reset_game}>{game_active && "Reset"}{!game_active && "Start"}</button>
    </div>
  )
}

export default App
