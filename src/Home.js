// src/pages/Home.js
import React from 'react';
// Remove this line: import './Home.css'; // Comment this out or delete it

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Mirror Magic</h1>
      <p>Capture your best moments with our stunning Mirror Photobooth!</p>
      <a href="/contact" className="cta-button">Contact Us</a>
    </div>
  );
};

export default Home;
