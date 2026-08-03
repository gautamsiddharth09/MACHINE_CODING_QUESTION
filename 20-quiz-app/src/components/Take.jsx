import React, { useEffect, useState } from 'react'

function Take() {
  const [ question, setQuestion] = useState([])
  const [ correctAns , setCorrectAns ] = useState({})
console.log(correctAns)


const score = ()=>{
  let marks = 0;
  question.forEach((q,i)=>{
    if(q.answer === correctAns[i])
      marks++
  })
  alert(`your marks ${marks}/${question.length}`)
}


  useEffect(()=>{
    const getQuestion = localStorage.getItem("quizQuestion")
    if(getQuestion){
      setQuestion(JSON.parse(getQuestion))
    }
  },[])
  return (
    <>
    
    
    <div className='container'>
      <h1>Take Quiz</h1>
     
  <div>
    {question.map((q,i)=>(
      <div key={i}>
      <h3>{i+1}.Q {q.question} </h3>
      <div> 
        <ol>
          {q.option.map((o,index)=>(
            <li key={index} >
              {o}
            <input type="radio" name={`question-${i}`} checked={correctAns[i] === index} onChange={()=>setCorrectAns({
              ...correctAns, [i] : index
            })} />
            </li>
            
          ))}
        </ol>
      </div>  
      </div>
    ))}
  </div>


  <button onClick={score}> Submit </button>
    </div>
    
    
    </>
  )
}

export default Take