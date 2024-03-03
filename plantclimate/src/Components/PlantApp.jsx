import React, { useEffect, useState } from 'react';
import './PlantApp.css';
import search_icon from './Assets/search.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlantApp = () => {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch all plants or search based on the searchTerm
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
    fetchData(); // Fetch all plants initially
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const delayDebounceFn = setTimeout(() => {
        fetchData(searchTerm);
      }, 500); // Delay for debounce

      return () => clearTimeout(delayDebounceFn); // Cleanup
    } else {
      fetchData(); // Fetch all plants if search term is cleared
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
          <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="plant-container">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <div key={plant.id} className="plant-item">
              <Link to={`/plants/${plant.id}`}>
                <h2>{plant.common_name || 'Name not available'}</h2>
                <p>{plant.scientific_name}</p>
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