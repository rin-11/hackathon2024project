import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Plant ID:', id); // Debugging log for ID
    const fetchPlantDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:4000/api/plants/${id}`);
        console.log('Response received:', response.data);
  
        if (response.data && response.data.data) {
          setPlant(response.data.data);
          setError('');
        } else {
          console.error('Unexpected response structure:', response.data);
          setError('Unexpected response structure. Please contact support.');
        }
      } catch (error) {
        console.error('Error fetching plant details:', error);
        setError('Failed to fetch plant details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    if (id) { // Ensure ID is not undefined before fetching
      fetchPlantDetails();
    } else {
      setError('Plant ID is undefined. Please ensure you\'re accessing the details page correctly.');
      setLoading(false);
    }
  }, [id]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {plant ? (
        <>
          <h1>{plant.common_name || 'Common name not available'}</h1>
          {plant.image_url && (
            <img
              src={plant.image_url}
              alt={plant.scientific_name || 'Plant image'}
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          )}
          <p>Scientific Name: {plant.scientific_name || 'Not available'}</p>
          <p>Family: {plant.family || 'Not available'}</p>
          <p>Genus: {plant.genus || 'Not available'}</p>
          <p>Native To: {plant.distribution?.native?.join(', ') || 'Not available'}</p>
          <p>Type: {plant.vegetable ? 'Vegetable' : 'Not available'}</p>
          <p>Edible: {plant.edible ? 'Yes' : 'No'}</p>

          <h3>Additional Images:</h3>
          {plant.images && Object.keys(plant.images).length > 0 ? (
            Object.entries(plant.images).map(([key, images]) =>
              images.map((image) => (
                <img key={image.id} src={image.image_url} alt="Plant" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              ))
            )
          ) : (
            <p>No additional images available.</p>
          )}

          <div className="back-to-homepage">
            <Link to="/">Back to Search</Link>
          </div>
        </>
      ) : (
        <p>Plant details not available.</p>
      )}
    </div>
  );
};

export default PlantDetails;