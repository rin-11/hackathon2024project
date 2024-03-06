import React from 'react';
import { Link } from 'react-router-dom'; 
import WeatherApp from './WeatherApp'; 
import mapIcon from './Assets/map.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <div>
          <WeatherApp />
        </div>
        <div className="map" style={{ display: 'flex', alignItems: 'center'}}>
          <Link to="/map">
            <img src={mapIcon} alt="map-icon" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Header;
