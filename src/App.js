
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Destinations from './pages/Destinations';
import TravelPlanDetail from './pages/TravelPlanDetail';
import ContactUs from './pages/ContactUs';
import lighthouseImage from './assets/lighthouse-image.jpg';
import logo from './assets/logo.png'; // Correct path to the image

const App = () => (
  <Router>
    <div>
      <img src={logo} alt="Logo" />
      <img src={lighthouseImage} alt="Lighthouse" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/travel-plan" element={<TravelPlanDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
