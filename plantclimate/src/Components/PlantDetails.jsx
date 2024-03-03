import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PlantApp.css';

export const PlantDetails = () => {
  let { plantId } = useParams();
  const [plantDetails, setPlantDetails] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      const options = {
          method: 'GET',
          url: `https://garden-api.p.rapidapi.com/plants/${plantId}`,
          headers: {
            'X-RapidAPI-Key': 'eae3c8bbcamshc65280e224f7d00p1faae9jsn05032c6193f5',
            'X-RapidAPI-Host': 'garden-api.p.rapidapi.com'
          }
        };

      try {
        const response = await axios.request(options);
        const data = response.data;

        if (typeof data.companionPlants === 'string') {
          data.companionPlants = JSON.parse(data.companionPlants.replace(/'/g, '"'));
        }
        setPlantDetails(data);
      } catch (error) {
        console.error('Failed to fetch plant details:', error);
      }
    };

    fetchPlantDetails();
  }, [plantId]);

  return (
    <div>
      {plantDetails ? (
        <div>
            <img src={plantDetails.imageUrl} alt={plantDetails.plantName} />
            <h2>{plantDetails.plantName} ({plantDetails.botanicalName})</h2>
            <h3>{plantDetails.botanicalName}</h3>
            <p>{plantDetails.description}</p>
            <p>Flower Color: {plantDetails.flowerColor}</p>
            <p>Food Nutrients: {plantDetails.foodNutrients}</p>
            <p>Growth Habits: {plantDetails.growthHabits}</p>
            <p>Water Requirements: {plantDetails.waterRequirements}</p>
            <p>Native Region: {plantDetails.nativeRegion}</p>
            <p>Companion Plants: {plantDetails.companionPlants.join(', ')}</p>
            <p>Blooming Times: {plantDetails.bloomingTimes}</p>
            <p>Plant Height: {plantDetails.plantHeight}</p>

            <div className="back-to-homepage">
                <Link to="/">Back to Search</Link>
            </div>
        </div>
      ) : (
        <p>Loading plant details...</p>
      )}
    </div>
  );
  
};

export default PlantDetails;
