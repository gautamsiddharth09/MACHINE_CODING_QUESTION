import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Otp() {
  const [ num , setNum] = useState("")
  const navigate = useNavigate()

  const otp = "102030"


const handleSubmit = (e)=>{
  e.preventDefault()

  if(otp !== num){
    alert("enter corrrect OTP")
    return
  }
  navigate('/dashboard')
}
  
  return (
  <>
  
    <div className="container">
    
    <form onSubmit={handleSubmit}>
      <h3>OTP Login</h3>
      <input type="text" placeholder='Enter your OTP' value={num} onChange={(e)=>setNum(e.target.value)}  className='email' />
        <button type='submit'>Submit</button>
    </form>

  
  </div>
    
  
  </>
  )
}

export default Otp