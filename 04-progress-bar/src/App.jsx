import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  let bar = [
    { id: 1, progress: 70 },
    { id: 2, progress: 20 },
    { id: 3, progress: 40 },
    { id: 4, progress: 90 },
    { id: 5, progress: 50 },
  ];

  const [pBar, setPbar] = useState(0);

useEffect(()=>{

  const interval = setInterval(()=>{
    setPbar((prev)=> {

       if(prev >= 90){
        clearInterval(interval)
        return prev
      }
     

      return prev +1
    })
  },20)

  return ()=>{
    clearInterval(interval)
  }

},[pBar])


  return (
    <>
      <h1>Progress Bar</h1>

      <ul>
        {bar.map((e) => (
          <li key={e.id}>
            <div className="progress-container">
              <div
                className="progress-fill"
               
                style={{ width: `${Math.min(pBar, e.progress)}%` }}
              >
                <span>{e.progress}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
