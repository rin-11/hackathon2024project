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
        const options = {
            method: 'GET',
            url: 'https://garden-api.p.rapidapi.com/plants',
            headers: {
              'X-RapidAPI-Key': 'eae3c8bbcamshc65280e224f7d00p1faae9jsn05032c6193f5',
              'X-RapidAPI-Host': 'garden-api.p.rapidapi.com'
            }
          };

      try {
        const response = await axios.request(options);
        setPlants(response.data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.plantName.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div key={plant._id} className="plant-item">
              {/* Update plant name to be a Link */}
              <Link to={`/plant/${plant._id}`}>
                <h1>{plant.plantName}</h1>
              </Link>
              <p>{plant.botanicalName}</p>
            </div>
          ))
        ) : (
          <p>Loading error</p>
        )}
      </div>
    </div>
  );
};

export default PlantApp;
