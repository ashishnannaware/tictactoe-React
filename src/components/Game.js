import React,{useState} from "react";
import Board from "./Board";
import {calculateWinner} from "../helpers"

const style={
    width:'200px',
    margin:'20px auto'
}
const Game = () => {

    const [board,setBoard]=useState(Array(9).fill(null));
    const [xIsNext, setXisNext]=useState(true);
    const winner = calculateWinner(board);


   const handleClick=(i)=>{
     const boardCopy=[...board];
     console.log(boardCopy);
     if(winner || boardCopy[i]) return;

     boardCopy[i]= xIsNext ? 'X' : 'O';
     setBoard(boardCopy);
     setXisNext(!xIsNext);
   }

   const jumpTo=()=>{
       
    }

    const renderMoves=()=>{
       return <button onClick={()=> setBoard(Array(9).fill(null))}>
           Start Game
       </button>
     }  

    return(
        <>
        <div>
           {winner ? 'Winner:'+ winner :""}
       </div>
        <Board squares={board} onClick={handleClick} />
        <div style={style}>
          <h2> {winner ? 'Winner: '+ winner : 'Next Player: '+ (xIsNext ? 'X' : 'O')}</h2>

          {renderMoves()}

        </div>
        </>
    )
};

export default Game;