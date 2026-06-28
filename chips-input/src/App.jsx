import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input === "") return;
      setTask([...task, { id: Date.now(), name: input }]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    setTask(task.filter((el) => el.id !== id));
  };
  return (
    <div>
      <h1>Chips Input</h1>

      <div className="container">
        <input
          type="text"
          placeholder=" type a chips and press tab"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>

      <div className="resInput">
        {task.map((el) => (
          <span key={el.id} className="textSpan">
            {el.name}
            <span className="cross" onClick={() => handleDelete(el.id)}>
              ❌
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
