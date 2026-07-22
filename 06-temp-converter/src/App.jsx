import "./App.css";
import React, { useState } from "react";

function App() {
  const [celsiusInput, setCelsiusInput] = useState("");
  const [fahrenheitInput, setFahrenheitInput] = useState("");

  // Celsius -> Fahrenheit
  function cfConverter(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Fahrenheit -> Celsius
  function fcConverter(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  const handleClick = () => {
    if (celsiusInput !== "") {
      const result = cfConverter(Number(celsiusInput));
      setFahrenheitInput(result.toFixed(2));
    } else if (fahrenheitInput !== "") {
      const result = fcConverter(Number(fahrenheitInput));
      setCelsiusInput(result.toFixed(2));
    } else {
      alert("Please enter a temperature.");
    }
  };

  const handleReset = () => {
    setCelsiusInput("");
    setFahrenheitInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "300px",
        margin: "50px auto",
      }}
    >
      <h2>Temperature Converter</h2>

      <input
        type="number"
        placeholder="Celsius (°C)"
        value={celsiusInput}
        onChange={(e) => {
          setCelsiusInput(e.target.value);
          setFahrenheitInput("");
        }}
      />

      <input
        type="number"
        placeholder="Fahrenheit (°F)"
        value={fahrenheitInput}
        onChange={(e) => {
          setFahrenheitInput(e.target.value);
          setCelsiusInput("");
        }}
      />

      <button onClick={handleClick}>Convert</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;