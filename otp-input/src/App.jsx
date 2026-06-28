import { useState } from "react";
import "./App.css";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const input_no = 6;
  const [inputArr, setInputArr] = useState(new Array(input_no).fill(""));

  const inputRef = useRef([]);

  const handleChange = (e, i) => {
    if (isNaN(e)) return;

    const newArrInput = [...inputArr];
    newArrInput[i] = e.slice(-1);
    setInputArr(newArrInput);
    inputRef.current[i + 1].focus();
  };
  const handleKeyDown = (e, i) => {
    if (e.key !== "Backspace") return;

    e.preventDefault();

    const newArr = [...inputArr];
    newArr[i] = "";
    setInputArr(newArr);

    if (i > 0) {
      inputRef.current[i - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  return (
    <>
      <h1>Otp Input</h1>

      <div className="input-div">
        {inputArr.map((el, i) => (
          <input
            key={i}
            type="text"
            value={el}
            onChange={(e) => handleChange(e.target.value, i)}
            ref={(el) => (inputRef.current[i] = el)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
