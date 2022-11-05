import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "b90cd005e4a7dd4e762bc4c161140c14";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = () => {
    
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    
  };

  return (
    <div className="container">
      <div className="searchbox">
      <input
        className="input"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={getWeather}
      />
      <button onClick={getWeather}><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
      </div>

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome</p>
        </div>
      ) : (
        <div>
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}F</p>
          <p className="details">{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default App;
