import React, { useEffect, useState } from 'react';
import './MyPlants.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyPlants = () => {
  const [plants, setPlants] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/plants`);
      setPlants(response.data.data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="myplants">
      <h1>My Plants</h1>
      <div className="my-plants-container">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <Link key={plant.id} to={`/plants/${plant.id}`} className="my-plant-item">
              {plant.image_url && (
                <img src={plant.image_url} alt={plant.scientific_name || 'Plant'} />
              )}
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MyPlants;
