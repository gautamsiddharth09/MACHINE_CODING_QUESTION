import "./App.css";

import React from "react";
import Tabs from "./component/Tabs";

function App() {
  const tabs = [
    {
      title: "Home",
      content: "🏠 Welcome to the Home Page!",
    },
    {
      title: "About",
      content: "ℹ️ We are a software company that builds React applications.",
    },
    {
      title: "Contact",
      content: "📧 Email: support@example.com",
    },
    {
      title: "Services",
      content: "💻 We provide Web Development and Mobile App Development.",
    },
  ];

  return (
    <>
      <Tabs tabs={tabs}/>
    </>
  );
}

export default App;
