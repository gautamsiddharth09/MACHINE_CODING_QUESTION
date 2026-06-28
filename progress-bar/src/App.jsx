import "./App.css";

import React, { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useState(10);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let timer;
    if (clicked) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setClicked(false);
            return 100;
          }
          return prev + 1;
        });
      },50);
    }

    return ()=>{
      clearInterval(timer)
    }
  },[progress, clicked]);

  const handleStart = () => {
    setClicked(true);
  };

  const handleReset = () => {
    setClicked(false);
    setProgress(10);
  };

  // const handleProgress = (e)=>{
  //   const barWidth = e.target.clientWidth;
  //   const clickWidth = e.nativeEvent.offsetX;
  //   const per = Math.round((clickWidth/barWidth) * 100)
  //   setProgress(per)
  // }

  const handleProgress = () => {};

  return (
    <div className="container">
      <h1>Progress Bar</h1>

      <div className="outer-div" onClick={handleProgress}>
        <div className="inner-div" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>

      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
