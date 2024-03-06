import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import WeatherApp from './WeatherApp'; // Adjust the import path as necessary

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        <WeatherApp />
      </div>
      
      <div>
        <Link to="/map">
          Map 
        </Link>
      </div>
    </div>
  );
};

export default Header;
