import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherApp from './Components/WeatherHeader/WeatherApp';
import PlantApp from './Components/Plants/PlantApp';
import PlantDetails from './Components/Plants/PlantDetails';
import NewsApp from './Components/Articles/NewsApp';

function App() {
  return (
    <div className="App">
      <WeatherApp />
     <Router>
      {/* <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/news" element={<NewsApp />} />
        <Route path="/plants" element={<PlantApp />} />
        <Route path="/plants/:id" element={<PlantDetails />} />
      </Routes> */}
    </Router>
    </div>
  );
}

export default App;
