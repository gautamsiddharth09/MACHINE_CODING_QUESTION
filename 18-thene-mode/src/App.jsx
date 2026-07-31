import './App.css'
import React from 'react'
import ThemedMode from './component/ThemedMode'
import { useTheme } from './component/ThemeProvider'
import { useEffect } from 'react'


function App() {
  const { theme } = useTheme()

  useEffect(() => {
  document.body.className = theme;
}, [theme]);
  return (
    <>
    

   <div className={theme}>
      <ThemedMode />
   </div>
    
    
    
    </>
  )
}

export default App