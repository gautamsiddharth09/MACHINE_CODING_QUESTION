import "./App.css";
import { users } from "./utils/users";

import React from "react";
import UserData from "./components/UserData";
import { useState } from "react";

function App() {

  const [ page, setPage ] = useState(1)

  const limit = 5;

  let skip = (page - 1) * limit

  let currentUsers = users.slice(skip, skip+limit)

  const totalPage = Math.ceil(users.length/5)

  let pageAray = []
  for(let i=1; i <= totalPage; i++){
    pageAray.push(i)
  }




  return (
    <>
      <UserData users={currentUsers} />
<div className="pagination">
  
    {pageAray.map((e,i)=>(
      <button key={i}
      onClick={()=>setPage(e)}
      className={page === e ? "active" : ""}
      >
        {e}
      </button>
    ))}
</div>
    </>
  );
}

export default App;
