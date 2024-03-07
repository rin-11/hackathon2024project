import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import PlantApp from './Components/Plants/PlantApp';
import PlantDetails from './Components/Plants/PlantDetails';
import NewsApp from './Components/Articles/NewsApp';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/Home';
import Map from './Pages/Map';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<PlantApp />} />
          <Route path="/plants/:id" element={<PlantDetails />} />
          <Route path="/news" element={<NewsApp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
