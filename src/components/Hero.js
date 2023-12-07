
import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Let's Find You a Perfect Home</h1>
        <p>Discover your dream home with our comprehensive property listings.</p>
        <div className="search-container">
          <input type="text" placeholder="Search for properties..." />
          <button type="button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
