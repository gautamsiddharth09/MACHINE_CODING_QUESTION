import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const [recipes, setReceipes] = useState([]);

  const [show, setShow] = useState(false);

  const [ cache, setCache] = useState({})

  const fetchData = async () => {


    try {

      
    if(cache[input]){
       console.log("API CALL CACHE RETURNE...");
      setReceipes(cache[input])
      return;
    }




      console.log("API CALLL...");
      const data = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input,
      );

       if (!data.ok) {
        throw new Error("data is not available");
      }

      const json = await data.json();
      const res = await json.recipes;
      setReceipes(res);
      setCache((prev)=>({...prev, [input]: res}))

     
    } catch (err) {
      console.error("something wrong", err.message);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <h1>Autocomplete Search Bar</h1>
      <div className="inputBox">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />

        {show && (
          <div className="resultBox">
            {recipes.map((el) => (
              <span key={el.id}> {el.name} </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
