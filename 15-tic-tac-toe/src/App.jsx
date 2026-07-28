import "./App.css";
import React, { useState } from "react";

function App() {
  let board = new Array(9).fill("");

  const [name, setName] = useState(board);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner ] = useState(null)
  const [ drawMatch, setDrawMatch ] = useState(false)

function winnerFunction(name){
   const lines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
  ]

  for(let i=0; i < lines.length; i++){
   const [ a,b,c] = lines[i]
   if(name[a] && name[a] === name[b] && name[b] === name[c]){
     return name[a]
    
   }
    // console.log([a,b,c])
  }
  return false
}



function draw(name){
     if(!name.includes("")){
      return true
     }
   return false
}





  function handleClick(index) {

    if(name[index] !== "") return
    const newBoard = [...name];
    newBoard[index] = player;

    
 
    setName(newBoard);

    const gameWinner = winnerFunction(newBoard)

     if(gameWinner){
      setWinner(gameWinner)
       alert(`Winner is ${gameWinner}`);
       console.log("winner is",gameWinner)
       return;
    }

    if(draw(newBoard)){
      setDrawMatch(true)
      alert("Match Draw")
      return;
    }

    setPlayer(newBoard[index] === "X" ? "O" : "X");

    console.log("newboard", newBoard[index]);
  }



  return (
    <>
      <div className="container-outer">
        <h1>Tic Tac Toe </h1>
         { winner && <h3>Winner is <span>「 ✦ {winner} ✦ 」</span></h3>}  
          { drawMatch && <h3> Match Draw  </h3>}

        <div className="container-inner">
          <div className="tic-tac">
            {name.map((item, i) => (
              <button key={i} className="square" onClick={() => handleClick(i)}>
                {" "}
                {item}{" "}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
