
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {
  const [ email, setEmail ] = useState("")
  const navigate = useNavigate()

  const otp = 102030

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(email === "") {
      alert("Please enter your email")
      return;
    }

     navigate("/otp")
  }

  return (
    <>
    
    
  <div className="container">
    
    <form onSubmit={handleSubmit}>
      <h3>OTP Login</h3>
      <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)}  className='email' />
        <button type='submit'>Submit</button>
    </form>

  
  </div>
    
    
    </>
  )
}

export default Login