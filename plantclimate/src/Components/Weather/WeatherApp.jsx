import React from 'react';
import './WeatherApp.css';
import search_icon from './Assets/search.png';
import clear_icon from './Assets/clear.png';
import rain_icon from './Assets/rain.png';
import wind_icon from './Assets/wind.png';
import snow_icon from './Assets/snow.png';
import cloud_icon from './Assets/cloud.png';
import drizzle_icon from './Assets/drizzle.png';
import humidity_icon from './Assets/humidity.png';

export const WeatherApp = () => {
    let api_key = "bbe31ca2e8e78841c19c7c154ed245e7";

    const [weathericon, setWeatherIcon] = React.useState(cloud_icon);

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

        // update weather elements
        if(data && data.main) {
            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temperature = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");
            const feelsLike = document.getElementsByClassName("feels-like");

            humidity[0].innerHTML = data.main.humidity + "%";
            wind[0].innerHTML = data.wind.speed + " km/hr";
            temperature[0].innerHTML = Math.round(data.main.temp) + "°F";
            feelsLike[0].innerHTML = "Feels Like " + Math.round(data.main.feels_like) + "°F";
            location[0].innerHTML = data.name;
        } else {
            console.error("Failed to retrieve weather data:", data);
        }

        // set weather icon
        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWeatherIcon(clear_icon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWeatherIcon(cloud_icon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWeatherIcon(drizzle_icon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWeatherIcon(drizzle_icon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWeatherIcon(rain_icon);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWeatherIcon(rain_icon);
        }   
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWeatherIcon(snow_icon);
        }   
        else {
            setWeatherIcon(clear_icon);
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
                <img src={weathericon} alt="cloud" className="cloud" />
        </div>
        <div className="weather-temp">
            60°F
        </div>
        <div className="feels-like">
            Feels like 59°F
        </div>
        <div className="weather-location">
            New York
        </div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">61%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">8.05 km/hr</div>
                    <div className="text">Wind</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp;
