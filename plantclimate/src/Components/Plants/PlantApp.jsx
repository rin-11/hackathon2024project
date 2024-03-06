import React, { useEffect, useState } from 'react';
import './PlantApp.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlantApp = () => {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async (search = '') => {
    const endpoint = search ? `/api/plants/search?q=${search}` : '/api/plants';
    try {
      const response = await axios.get(`http://localhost:4000${endpoint}`);
      setPlants(response.data.data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const delayDebounceFn = setTimeout(() => {
        fetchData(searchTerm);
      }, 500); 

      return () => clearTimeout(delayDebounceFn); 
    } else {
      fetchData(); 
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="plant_app_container"> 
      <div className="search-bar-container"> 
        <div className="plant-search-bar">
          <input
            type="text"
            className="plantInput"
            placeholder="Search by plant"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="plant-results-container">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <div key={plant.id} className="plant-item">
              <Link to={`/plants/${plant.id}`}>
                <h2>{plant.common_name || 'Name not available'}</h2>
                {plant.image_url && (
                  <img src={plant.image_url} alt={plant.scientific_name || 'Plant'} className="plant-image" />
                )}
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
