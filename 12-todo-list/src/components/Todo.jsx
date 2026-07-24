import React, { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState(() => {
    const allTodo = localStorage.getItem("todos");
    return JSON.parse(allTodo) || todo;
  });
  const [input, setInput] = useState("");
  const [todoId, setTodoId] = useState(null);
  const [completed, setCompleted] = useState(false);

  // handle click
  const handleClick = () => {
    if (input === "") return alert("input your todo");

    if (todoId !== null) {
      const updateTodo = todo.map((item) =>
        item.id === todoId.id ? { ...item, text: input } : item,
      );
      setTodo(updateTodo);
    } else {
      const newTodo = {
        id: Date.now(),
        text: input,
        completedTask: false,
      };

      setTodo([...todo, newTodo]);
    }

    setInput("");
  };

  // edit funciton
  const handleEdit = (e) => {
    console.log("elan", e.text);
    setInput(e.text);
    setTodoId(e);
  };

  // delete function
  const handleDelete = (todoId) => {
    console.log("todo", todoId);
    const filterTodo = todo.filter((e) => e.id !== todoId.id);
    setTodo(filterTodo);
    console.log("filter todo", filterTodo);
  };

  // toggle function
  const handletoggle = (id) => {
    const updateTodo = todo.map((item) =>
      item.id === id ? { ...item, completedTask: !item.completedTask } : item,
    );
    setTodo(updateTodo);
  };

  // useeffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <h1>Todo List</h1>
      <div className="todo">
        <input
          type="text"
          placeholder="Enter your todo task here"
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-btn" onClick={handleClick}>
          Add Todo
        </button>
      </div>

      <div className="res-todo">
        <ul>
          {todo.map((e) => (
            <li key={e.id}>
              <div className="text-div">
                <span
                  style={{
                    textDecoration: e.completedTask ? "line-through" : "none",
                  }}
                >
                  {e.text}
                </span>
                <div className="completed" onClick={() => handletoggle(e.id)}>
                  Completed
                </div>

                <button className="edit-btn" onClick={() => handleEdit(e)}>
                  Edit
                </button>

                <button className="delete-btn" onClick={() => handleDelete(e)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
