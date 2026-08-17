import React from "react";
import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  const [show, setShow] = useState("");

  const handleShow = (menu) => {
    setShow(show === menu ? "" : menu);
  };
  return (
    <>
      <nav>
        <div className="container">
          <ul>
            <li> Logo </li>
            <li>Home</li>

            <li onClick={() => handleShow("service")}>
              Services ▾
              {show === "service" && (
                <select className="select" onClick={(e) => e.stopPropagation()}>
                  <option value=""> cake </option>
                  <option value=""> Biscuit </option>
                  <option value=""> Chockolate </option>
                </select>
              )}
            </li>
            

            <li onClick={() => handleShow("about")}>
              About ▾
              {show === "about" && (
                <select className="select" onClick={(e) => e.stopPropagation()}>
                  <option>Ira</option>
                  <option>Mira</option>
                  <option>Khira</option>
                </select>
              )}
            </li>

            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
