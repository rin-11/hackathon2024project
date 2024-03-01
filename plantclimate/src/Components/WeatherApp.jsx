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
  return (
    <div className="weather_container">
        <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon">
                    <img src={search_icon} alt="search" className="search" />
                </div>     
        </div>
    </div>
  )
}

export default WeatherApp;
