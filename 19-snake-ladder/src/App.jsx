import "./App.css";

import React, { useState } from "react";

function App() {
  let box = [];

  for (let i = 100; i > 0; i--) {
    box.push(i);
  }

  const [players, setPlayers] = useState({
    player1: 1,
    player2: 1,
  });

  const [currentPlayer, setCurrentPayer] = useState("player1");

  const [dice, setDice] = useState(0);

 

  const snake = {
    99: 13,
    90: 73,
    80: 55,
    60: 50,
    43: 35,
    30: 10,
  };

  const ladder = {
    15: 75,
    30: 50,
    20: 45,
    40: 95,
    55: 65,
    63: 80,
  };

  const roll = () => {
    const random = Math.floor(Math.random() * 6) + 1;

    // dice will not update immediate
    setDice(random);

    let nePosition = players[currentPlayer] + random;

    if (nePosition > 100) {
      setCurrentPayer(currentPlayer === "player1" ? "player2" : "player1");
      return;
    }

    if (snake[nePosition]) {
      alert("snak huuuuuuu");
      nePosition = snake[nePosition];
    } else if (ladder[nePosition]) {
      alert("laderrrrrrrrrr");
      nePosition = ladder[nePosition];
    }

    const updatePlayer = {
      ...players,
      [currentPlayer]: nePosition,
    };

    setPlayers(updatePlayer);

    if (nePosition === 100) {
      alert("wooooooooon");
      return;
    }

    setCurrentPayer(currentPlayer === "player1" ? "player2" : "player1");

    console.log("players.player1", players);
  };

  return (
    <>
      <h1>Snake and Ladder</h1>
      <div className="container">
        <div className="board">
          {box.map((i) => (
            <button key={i} className="ceil">
              {players.player1 === i && (<span className="red">P1</span>)}
              {i}
              {players.player2 === i && ( <span className="yellow"> P2 </span>)}
            </button>
          ))}
        </div>
      </div>

      <button onClick={roll} className="roll">
        {" "}
        Roll{" "}
      </button>

      <h1> Dice : {dice} </h1>
    </>
  );
}

export default App;
