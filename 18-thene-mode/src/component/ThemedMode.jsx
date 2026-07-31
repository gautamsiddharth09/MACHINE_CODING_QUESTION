import React from "react";
import { useTheme } from "./ThemeProvider";

function ThemedMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
     <div>
       <nav>
        <h2 className={`header ${theme}`}>Theme Mode</h2>

        <button 
        onClick={toggleTheme}
        className={`btn ${theme}`}
        >
          
          {theme === "light" ? "Dark" : "Light"}{" "}
        </button>
      </nav>
     </div>
    </>
  );
}

export default ThemedMode;
