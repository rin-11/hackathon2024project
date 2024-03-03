import React, { useEffect, useState } from 'react';
import './PlantApp.css';
import search_icon from './Assets/search.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const PlantApp = () => {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/plants');
        setPlants(response.data.data); 
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.common_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.scientific_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="plant_container">
      <div className="top-bar">
        <input
          type="text"
          className="plantInput"
          placeholder="Search by plant"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="search-icon">
          <img src={search_icon} alt="search" className="search" />
        </div>
      </div>
      <div className="plant-container">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <div key={plant.id} className="plant-item">
              <Link to={`/plants/${plant.id}`}>
                <h2>{plant.common_name}</h2>
                <p>{plant.scientific_name}</p>
                {plant.image_url && <img src={plant.image_url} alt={plant.scientific_name} className="plant-image" />}
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PlantApp;
