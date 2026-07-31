import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

 export const createThemeContext = createContext()

function ThemeProvider({children}) {

  const [ theme, setTheme ] = useState("light")

  const toggleTheme = ()=>{
    setTheme((prev)=>prev === "light" ? "dark" : "light")
  }

  return (
    <>
    
    <createThemeContext.Provider value={{theme, toggleTheme}}>
     {children}
    </createThemeContext.Provider>
    
    </>
  )
}

export default ThemeProvider


export const useTheme = ()=>{
 return  useContext(createThemeContext)
}