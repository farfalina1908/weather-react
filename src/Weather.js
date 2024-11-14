import React, {useState} from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner'

export default function Weather(props) {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [loaded, setLoaded] = useState(  
        <Audio
            height="80"
            width="80"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />);

    function handleResponse(response) {
       
        setLoaded(true);
        setWeather({
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });

    } 
    function handleSearch(event) {
        event.preventDefault();
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function updateCity(event) {
        setCity(event.target.value);
      }
    
      let form = (
        <form onSubmit={handleSearch}>
          <input
            type="search"
            onChange={updateCity}
            placeholder="Enter a city..."
          />
          <button type="submit">Search</button>
        </form>
      );
    
      if (loaded) {
        return (
          <div>
            {form}
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}°C</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>
            </ul>
          </div>
        );
      } else {
        return (   
            form
    //     <Audio
    //     height="80"
    //     width="80"
    //     radius="9"
    //     color="white"
    //     ariaLabel="loading"
    //     wrapperStyle
    //     wrapperClass
    //   />
    );
     
      }

        
   
}