import { Component } from "react";
import CreateQuiz from "./components/CreateQuiz";
import Take from "./components/Take";
import "./App.css";

import React from "react";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);

  const nav = [
    { name: "Create quiz", Component: CreateQuiz, active: false },
    { name: "Take quiz", Component: Take, active: false },
  ];

  const ActiveComp = nav[active].Component;

  return (
    <>
      <nav>
        {nav.map((el, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={active === i ? "active" : ""}
          >
            {" "}
            {el.name}{" "}
          </div>
        ))}
      </nav>

      <div>
        <ActiveComp />
      </div>
    </>
  );
}

export default App;
