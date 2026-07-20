import "./App.css";

import React, { useState } from "react";

function App() {
  const accordionData = [
    {
      id: 1,
      title: "What is HTML?",
      content:
        "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages.",
    },
    {
      id: 2,
      title: "What is CSS?",
      content:
        "CSS (Cascading Style Sheets) is used to style HTML elements by controlling colors, layouts, spacing, and animations.",
    },
    {
      id: 3,
      title: "What is JavaScript?",
      content:
        "JavaScript is a programming language that makes web pages interactive by handling user events, DOM manipulation, and API calls.",
    },
    {
      id: 4,
      title: "What is React?",
      content:
        "React is a JavaScript library developed by Meta for building fast, reusable, and component-based user interfaces.",
    },
    {
      id: 5,
      title: "What is Node.js?",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript outside the browser.",
    },
    {
      id: 6,
      title: "What is Express.js?",
      content:
        "Express.js is a lightweight web framework for Node.js used to build REST APIs and server-side applications.",
    },
    {
      id: 7,
      title: "What is MongoDB?",
      content:
        "MongoDB is a NoSQL database that stores data in flexible JSON-like documents instead of tables.",
    },
    {
      id: 8,
      title: "What is Git?",
      content:
        "Git is a distributed version control system that helps developers track changes and collaborate on projects.",
    },
  ];

  const [toggle, setToggle] = useState(null);

  const clickToggle = (id) => {
    setToggle((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <h1>Accordion Section</h1>

      <div>
        {accordionData.map((item) => (
          <div key={item.id}>
            <div className={toggle === item.id ? "toggleDiv" : "titleDiv"}>
              <p onClick={() => clickToggle(item.id)}>{item.title}</p>
              {toggle === item.id && <p>{item.content}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
