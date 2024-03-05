import React, { useState } from 'react';
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
    const api_key = "bbe31ca2e8e78841c19c7c154ed245e7";
    const [weatherIcon, setWeatherIcon] = useState(cloud_icon);
    const [daylightHours, setDaylightHours] = useState('');
    const [humidity, setHumidity] = useState('61%'); // default value
    const [temperature, setTemperature] = useState('60°F'); // default value
    const [location, setLocation] = useState('New York'); // default value
    const [feelsLike, setFeelsLike] = useState('59°F'); // default value

    const search = async () => {
        const element = document.querySelector(".cityInput");
        if(element.value === ""){
            return;
        };
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Imperial&appid=${api_key}`;

        const response = await fetch(url);
        const data = await response.json();

        if(data && data.main && data.sys) {
            setHumidity(data.main.humidity + "%");
            setTemperature(Math.round(data.main.temp) + "°F");
            setFeelsLike("Feels Like " + Math.round(data.main.feels_like) + "°F");
            setLocation(data.name);

            // Calculate and update remaining daylight
            const sunrise = data.sys.sunrise;
            const sunset = data.sys.sunset;
            const daylightDuration = sunset - sunrise;
            const hours = Math.floor(daylightDuration / 3600); // Convert seconds to hours
            const minutes = Math.floor((daylightDuration % 3600) / 60); // Remaining seconds converted to minutes
            setDaylightHours(`${hours}h ${minutes}m`);

            // Update weather icon based on the icon code
            const iconMap = {
                "01d": clear_icon, "01n": clear_icon,
                "02d": cloud_icon, "02n": cloud_icon,
                "03d": drizzle_icon, "03n": drizzle_icon,
                "04d": drizzle_icon, "04n": drizzle_icon,
                "09d": rain_icon, "09n": rain_icon,
                "10d": rain_icon, "10n": rain_icon,
                "13d": snow_icon, "13n": snow_icon,
            };
            setWeatherIcon(iconMap[data.weather[0].icon] || cloud_icon);
        } else {
            console.error("Failed to retrieve weather data:", data);
        }
    };

    return (
        <div className="weather_container">
            <div className="weather-row">
                <div className="data-container">
                    <div className="element weather-temp">{temperature}</div>
                    <div className="element weather-image">
                        <img src={weatherIcon} alt="weather-icon" />
                    </div>
                    <div className="element daylight-hours">
                        <div className="data">
                            {daylightHours}
                            <div className="text">Remaining Daylight</div>
                        </div>
                    </div>
                    <div className="element humidity">
                        <img src={humidity_icon} alt="Humidity icon" className="icon" />
                        <div className="data">{humidity}
                            <div className="text">Humidity</div>
                        </div>     
                    </div>
                </div>
            </div>
            <div className="weather-info">
                <div className="weather-location">{location}</div>
                <div className="feels-like">{feelsLike}</div>
            </div>
            <div className="search-bar">
                <input type="text" className="cityInput" placeholder="Search by city" />
                <div className="search-icon" onClick={search}> 
                    <img src={search_icon} alt="search" className="search" />
                </div>     
            </div>
        </div>
    );
};

export default WeatherApp;
