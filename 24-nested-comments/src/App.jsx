import "./App.css";
import React, { useState } from "react";

function App() {
 
  const [text, setText] = useState("");
const [ comment, setComment ] = useState([])

  const post = {
    id: 1,

    title: "Q. What is React js.?",

    content: "React is Java script library.",
  };

  const handleComment = () => {
   
    const newComment = {
      id : Date.now(),
      text: text,
      replies: []
    }

    setComment((prev)=>{
    return [...prev, newComment]
    })

    setText("")


  };

  const handleNested = (id)=>{
    console.log("id is", id)
    setComment((prev)=>{
      return prev.map((item)=>{
        if(item.id === id){
          return {
            ...item, replies : [ ...item.replies, {
              id : Date.now(),
              text : text,
              replies : []
            }]
          }
        }
        return item
      })
    })
  }

  return (
    <>
      <div className="container">

        <div className="post">
          <h3> {post.title} </h3>
          <p>Ans:- {post.content} </p>
        </div>
        <div>
          
        <input type="text" placeholder="Write your comment" value={text} onChange={(e)=>setText(e.target.value)} />
        <button className="btn" onClick={handleComment} > Comment </button>
        </div>

{comment.map((reply)=>(
  <div key={reply?.id}>
  <p onClick={()=>handleNested(reply.id)}> {reply?.text} </p>
    </div>
))}
      </div>

     
    </>
  );
}

export default App;
