import React from 'react';
import { Link } from 'react-router-dom'; 
import WeatherApp from './WeatherApp'; 
import mapIcon from './Assets/map.png';
import logoIcon from './Assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="full-header">
        <div className="logo-container">
            <img src={logoIcon} alt="logo-icon" className="logo" />
        </div>
        <div className="header">
            <div className="weather">
                <WeatherApp />
            </div>
            <div className="map">
                <Link to="/map">
                    <img src={mapIcon} alt="map-icon" />
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Header;
