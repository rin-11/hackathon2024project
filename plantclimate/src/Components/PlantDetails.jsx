import React from 'react';
import { useParams } from 'react-router-dom';

export const PlantDetails = () => {
  let { plantId } = useParams();

  // You can fetch plant details using plantId or pass plant data using state in Link (React Router v6)

  return (
    <div>
      <h2>Plant Details - {plantId}</h2>
      {/* Display plant details here */}
    </div>
  );
};

export default PlantDetails;
