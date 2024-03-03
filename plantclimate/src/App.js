import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherApp from './Components/WeatherApp';
import PlantApp from './Components/PlantApp';
import PlantDetails from './Components/PlantDetails';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<PlantApp />} />
        <Route path="/plant/:plantName" element={<PlantDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
