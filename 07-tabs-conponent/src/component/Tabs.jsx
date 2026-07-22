import React, { useState } from "react";

function Tabs({ tabs }) {
  const handleClick = () => {};

  const [active, setActive] = useState(0);

  return (
    <>
      <div className="nav">
        {tabs.map((tab, i) => (
          <button onClick={() => setActive(i)} key={i}
          className={active === i ? "active" : ""}
          >
            {tab.title}{" "}
          </button>
        ))}
      </div>

      <div className="content">
        <h3> {tabs[active].content}</h3>
      </div>
    </>
  );
}

export default Tabs;
