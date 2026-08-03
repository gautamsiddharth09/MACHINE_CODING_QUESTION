import './App.css'

import React, { useState } from 'react'

function App() {
  const [ collection, setCollection] = useState({
    capitalLetter : true,
    smallLetter : true,
    number : true,
    uniqueChar : true
  })

  const [ password, setPassword ]  = useState("")

  const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const small = "abcdefghijklmnopqrstuvwxyz"
  const num = "1234567890"
  const uni = "!@#$%^&*()_+=<>/?"

  const [ length, setLength ] = useState(8)

  const generatePassword = ()=>{
    let char = "";

    if(collection.capitalLetter){
      char = char + caps
    }

    if(collection.smallLetter){
      char = char + small
    }

    if(collection.number){
      char = char + num
    }

    if(collection.uniqueChar){
      char = char + uni
    }

    console.log(char.length, "char")
    let Newpassword = ""

    for(let i=0; i < length; i++){
      const random = Math.floor(Math.random() * char.length)
      Newpassword = Newpassword + char[random]
      setPassword(Newpassword)
    }
   
   
  }


  const copy = ()=>{
    navigator.clipboard.writeText(password)
  }

  return (
    <>
    
    <h1> Password Generator </h1>
    
    <div className="checkbox">
       <div>
     <label>Capital Letter</label>
    <input type="checkbox" value={collection.capitalLetter} onChange={()=>setCollection({
      ...collection, capitalLetter : !collection.capitalLetter
    })} />
   </div>
   <div>
     <label>Small Letter</label>
    <input type="checkbox" value={collection.smallLetter} onChange={()=>setCollection({
      ...collection, smallLetter : !collection.smallLetter
    })}/>
   </div>
   <div>
     <label>Number</label>
    <input type="checkbox" value={collection.number} onChange={()=>setCollection({
      ...collection, number : !collection.number
    })}/>
   </div>
   <div>
     <label>unique character</label>
    <input type="checkbox" value={collection.uniqueChar} onChange={()=>setCollection({
      ...collection, uniqueChar : !collection.uniqueChar
    })} />
   </div>

   <div>
     <label>Length</label>
    <input type="number" value={length} onChange={(e)=>setLength(e.target.value)} min={8} max={16} className='num' />
   </div>
    </div>


    <input type="text" value={password} readOnly />
   <button  onClick={generatePassword}>Generate Password</button>
   <button onClick={copy}>Copy</button>    
    
    </>
  )
}

export default App