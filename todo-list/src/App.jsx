import { useState } from "react";
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleClick = () => {
    if (input === "") return;

    if (editId !== null) {
      setTodo(
        todo.map((item) =>
          item.id === editId ? { ...item, name: input } : item
        )
      );
      setEditId(null);
      setInput("");
    } else {
      setTodo([...todo, { id: Date.now(), name: input, isCompleted: false }]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((el) => el.id !== id));
  };

  const handleEdit = (item) => {
    setInput(item.name);
    setEditId(item.id);
  };

  const toggleCheckbox = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  console.log("hello", todo);
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        className="inputTodo"
        placeholder="Enter your task here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>

      <ul>
        {todo.map((el) => (
          <li key={el.id}>
            <input
              type="checkbox"
              className="inputCheckbox"
              checked={el.isCompleted}
              onChange={() => toggleCheckbox(el.id)}
            />

            <span
              style={{
                textDecoration: el.isCompleted ? "line-through" : "none",
                color: el.isCompleted ? "gray" : "black",
              }}
            >
              {el.name}
            </span>

            <button className="liBtn" onClick={() => handleEdit(el)}>
              Edit
            </button>
            <button className="liBtn" onClick={() => handleDelete(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
