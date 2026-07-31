import "./App.css";

import React, { useState } from "react";

function App() {
  // players
  const [players, setPlayers] = useState({
    player1: 1,
    player2: 1,
  });

  // dice
  const [dice, setDice] = useState(0);

  const [position, setPosition] = useState(1);

  const [currentPlayer, setCurrentPayer] = useState("player1");

  // board
  let board = [];
  for (let i = 0; i < 100; i++) {
    board.push(i + 1);
  }
  console.log("board", board);

  // ladders
  const ladders = {
    6: 25,
    11: 40,
    17: 69,
    46: 90,
    60: 85,
  };

  // snakes
  const snakes = {
    99: 54,
    70: 55,
    52: 42,
    25: 2,
    95: 72,
  };

  const rollDice = () => {
    let random = Math.floor(Math.random() * 6) + 1;
    setDice(random);

    let newPosition = position + dice;

    if (newPosition <= 100) {
      if (ladders[newPosition]) {
        alert("Ladder");
        newPosition = ladders[newPosition];
      } else if (snakes[newPosition]) {
        alert("Snakes");
        newPosition = snakes[newPosition];
      }

      const updatePlayers = {
        ...players,
        [currentPlayer]: newPosition,
      };

      setPlayers(updatePlayers);

      if (position === 100) {
        alert("wooooooooon");
        return;
      }
    }

    setCurrentPayer(currentPlayer === "player1" ? "player2" : "player1");
  };

  return (
   <>
  <div className="container">
    <h1>Snake & Ladder (2 Players)</h1>

    <h2>Current Turn: {currentPlayer}</h2>

    <div className="board">
      {board.map((cell) => (
        <div key={cell} className="cell">
          <span>{cell}</span>

          {players.player1 === cell && (
            <div className="p1">P1</div>
          )}

          {players.player2 === cell && (
            <div className="p2">P2</div>
          )}
        </div>
      ))}
    </div>

    <div className="game-info">
      <h2>🎲 Dice: {dice}</h2>

      <button onClick={rollDice}>Roll Dice</button>

      <div className="players">
        <div className="player-card">
          <h3>🔴 Player 1</h3>
          <p>Position: {players.player1}</p>
        </div>

        <div className="player-card">
          <h3>🔵 Player 2</h3>
          <p>Position: {players.player2}</p>
        </div>
      </div>
      
    </div>
  </div>
</>
  );
}

export default App;
