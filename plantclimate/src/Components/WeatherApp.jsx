import React from 'react';
import './WeatherApp.css';
import search_icon from './Assets/search.png';
import clear_icon from './Assets/clear.png';
import rain_icon from './Assets/rain.png';
import wind_icon from './Assets/wind.png';
import snow_icon from './Assets/snow.png';
import clouds_icon from './Assets/cloud.png';
import drizzle_icon from './Assets/drizzle.png';
import humidity_icon from './Assets/humidity.png';

export const WeatherApp = () => {
    let api_key = "bbe31ca2e8e78841c19c7c154ed245e7";

    const search = async () => {
        // get the search element
        const element = document.getElementsByClassName("cityInput");
        // check if input is empty
        if(element[0].value === ""){
            return 0;
        };
        // fetch the weather data
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Imperial&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        if(data && data.main) {
            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temperature = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");

            humidity[0].innerHTML = data.main.humidity + "%";
            wind[0].innerHTML = data.wind.speed + " km/hr";
            temperature[0].innerHTML = Math.round(data.main.temp) + "°F";
            location[0].innerHTML = data.name;
        } else {
            console.error("Failed to retrieve weather data:", data);
        }
    };




  return (
    <div className="weather_container">
        <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search by city" />
                <div className="search-icon" onClick={()=>{search()}}> 
                    <img src={search_icon} alt="search" className="search" />
                </div>     
        </div>
        <div className="weather-image">
                <img src={clouds_icon} alt="cloud" className="cloud" />
        </div>
        <div className="weather-temp">
        </div>
        <div className="weather-location">
            <h1></h1>
        </div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent"></div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate"></div>
                    <div className="text">Wind</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp;
