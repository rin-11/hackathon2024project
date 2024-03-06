import React from 'react';
import './Map.css'; // Ensure you have this import if you're using CSS
import mapImage from './PlantHardinessZones.png'

const Map = () => {
  return (
    <div className="map-container">
      <h2>Click the image below for our Smart Grow Interactive Map Data</h2>
      <br></br>
      <a href="https://public.tableau.com/app/profile/david.sutton2001/viz/SmartGrowMap/PlantHardinessZones" target="_blank" rel="noopener noreferrer">
        <img src={mapImage} alt="Plant Hardiness Zones Map" />
      </a>
    </div>
  );
};

export default Map;
