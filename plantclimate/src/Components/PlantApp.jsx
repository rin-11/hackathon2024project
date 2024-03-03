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
        // Specify the full URL of your backend endpoint
        const response = await axios.get('http://localhost:4000/api/plants');
        setPlants(response.data.data); // Adjust based on the actual structure of your response
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
    plant.common_name.toLowerCase().includes(searchTerm.toLowerCase())
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
              <Link to={`/plants/${plant._id}`}>
                <h1>{plant.common_name}</h1>
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