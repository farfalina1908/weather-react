import React, {useState} from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner'

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({ready: false});
    // const [loaded, setLoaded] = useState(  
    //     <Audio
    //         height="80"
    //         width="80"
    //         radius="9"
    //         color="white"
    //         ariaLabel="loading"
    //         wrapperStyle
    //         wrapperClass
    //       />);

    function handleResponse(response) {
       
        // setLoaded(true);
        setWeather({
          ready: true,
          coordinates: response.data.coord,
          date: new Date(response.data.time * 1000),
          name: response.data.name,
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });

    } 

    function search() {
      let apiKey = "094780c710fa4efd669f0df8c3991927";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
    function handleSearch(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        setCity(event.target.value);
      }
    
      let form = (
        
            <form onSubmit={handleSearch}>
              <div class="row">
              <div class="col-9"> <input class="form-control search-input"
            type="search"
            onChange={updateCity}
            placeholder="Enter a city..."
          /></div>
              <div class="col-3 p-0">  <button class="btn btn-primary w-100" type="submit">Search</button></div>
         
            </div>
        </form>
       
      
      );
    
      if (weather.ready) {
        return (
          <div>
            {form}
<div class="Weather-info"> 
  <div class="row">
    <div class="col-6">
      <h1>{weather.name}</h1>

  <ul>
    <li><span>Friday 12:56</span> {weather.description}</li>
              
              <li>Humidity: <strong>{weather.humidity}%</strong>, Wind: <strong>{weather.wind}km/h</strong></li>
              
            </ul>
            </div>
     <div class="col-lg-6 col-md-6 col-sm-8">
     <div class="temperature-container d-flex justify-content-end">
     <img class= "canvas" src={weather.icon} alt={weather.description} />
        <div class="temperature">
       {Math.round(weather.temperature)}<span class="unit">°C</span>
        </div> 

         </div>
         
      </div>    
      
            </div>
            <div class="row WeatherForecast">
<div class="col">
<div class="WeatherForecast">
  <div class="forecast-time">Fri</div>
  <img class= "canvas" src={weather.icon} alt={weather.description} />
  <div class="forecast-temperature">
    <span class="forecast-temperature-max">13°</span>
    <span class="forecast-temperature-min">10°</span>
  </div>
  <div>
  
  </div>
</div>
</div>
<div class="col">
<div class="WeatherForecast">
  <div class="forecast-time">Sut</div>
  <img class= "canvas" src={weather.icon} alt={weather.description} />
  <div class="forecast-temperature">
    <span class="forecast-temperature-max">13°</span>
    <span class="forecast-temperature-min">10°</span>
  </div>
  <div>
  
  </div>
</div>
</div>
<div class="col">
<div class="WeatherForecast">
  <div class="forecast-time">Sun</div>
  <img class= "canvas" src={weather.icon} alt={weather.description} />
  <div class="forecast-temperature">
    <span class="forecast-temperature-max">13°</span>
    <span class="forecast-temperature-min">10°</span>
  </div>
  <div>
  
  </div>
</div>
</div>
<div class="col">
<div class="WeatherForecast">
  <div class="forecast-time">Mon</div>
  <img class= "canvas" src={weather.icon} alt={weather.description} />
  <div class="forecast-temperature">
    <span class="forecast-temperature-max">13°</span>
    <span class="forecast-temperature-min">10°</span>
  </div>
  <div>
  
  </div>
</div>
</div>
<div class="col">
<div class="WeatherForecast">
  <div class="forecast-time">Tue</div>
  <img class= "canvas" src={weather.icon} alt={weather.description} />
  <div class="forecast-temperature">
    <span class="forecast-temperature-max">13°</span>
    <span class="forecast-temperature-min">10°</span>
  </div>
  <div>
  
  </div>
</div>

</div>

<footer>
  This project was coded by Olena Berezina and <a href="https://github.com/farfalina1908/weather-react/" target="_blank" rel="noopener noreferrer">is open-sourced on GitHub</a> and <a href="https://zingy-figolla-597af2.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
</footer>
              </div>  
            </div>
          </div>
        );
      } else {
        search();
        return (   
        <Audio
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
     
      }

        
   
}