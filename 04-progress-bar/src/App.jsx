import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Progress Bar</h1>

      <div className="progress-container">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h2>{progress}%</h2>

      {progress === 100 && (
        <h3 className="complete">Task Completed 🎉</h3>
      )}
    </div>
  );
}

export default App;