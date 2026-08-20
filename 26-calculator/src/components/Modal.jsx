import React from 'react'
import "./Modal.css"

function Modal({onclick, show}) {
  return (
    <>
    
    
    { show && 
    <>
    <div className="container">
      <div className="inner">
        <button className='cross' onClick={onclick}>✖</button>
        <h1>Modal Component</h1>
        <p>hello</p>
        <p>Practicing  machine coding</p>
      </div>
    </div>
    </>}
    
    </>
  )
}

export default Modal