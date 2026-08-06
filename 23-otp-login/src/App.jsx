import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Otp from './components/Otp'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Login />} />
      <Route path='/otp'  element={<Otp />} />
      <Route path='/dashboard'  element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App