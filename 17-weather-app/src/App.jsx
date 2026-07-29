import './App.css'

import React, { useEffect, useState } from 'react'

function App() {
  const API_KEY=import.meta.env.VITE_WEATHER_API_KEY

  const [ city, setCity] = useState("")
  const [ weather, setWeather ] = useState(null)

  const weatherApp = async ()=>{
     try{
       const fetchWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
       if(!fetchWeather){
        throw new Error("something went wrong")
       }

       const res = await fetchWeather.json()
       setWeather(res)
       console.log("res", res)

     }catch(error){
      console.error("Error!", error)
     }
  }

  


  return (
    <>
    <div className="container">
      
    <h1>Weather App</h1>
    <input type="text" name="" id="" placeholder='Enter your city here' value={city} onChange={(e)=>setCity(e.target.value)} />

    <button onClick={weatherApp}>Search</button>
    </div>

    {weather && (
  <div className="weather">
    <h2>
      {weather.location.name}, {weather.location.country}
    </h2>

    <img
      src={`https:${weather.current.condition.icon}`}
      alt={weather.current.condition.text}
    />

    <h1>{weather.current.temp_c}°C</h1>

    <p className="condition">
      {weather.current.condition.text}
    </p>

    <div className="stats">
      <div className="card">
        <h3>💨 Wind</h3>
        <p>{weather.current.wind_kph} km/h</p>
      </div>

      <div className="card">
        <h3>💧 Humidity</h3>
        <p>{weather.current.humidity}%</p>
      </div>

      <div className="card">
        <h3>☁ Cloud</h3>
        <p>{weather.current.cloud}%</p>
      </div>

      <div className="card">
        <h3>🌡 Feels Like</h3>
        <p>{weather.current.feelslike_c}°C</p>
      </div>
    </div>
  </div>
)}


    
    
    </>
  )
}

export default App