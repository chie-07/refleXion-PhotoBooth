import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link
import Home from './Home'; // Import Home page
import Contact from './Contact'; // Ensure this is the correct path
import Booking from './Booking'; // Import the Booking component

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <div className="logo">
              <h1>Mirror Magic</h1>
            </div>
            <ul className="nav-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><Link to="/booking">Book Now</Link></li> {/* Change to Link component */} 
              <li><Link to="/contact">Contact</Link></li> {/* Change to Link component */}
            </ul>
          </nav>
          <div className="hero">
            <h2>Capture Your Best Moments with Style!</h2>
            <p>Your special moments deserve a photobooth as unique as you are. Book us now for unforgettable memories.</p>
            <Link to="/booking" className="cta-button">Book Now</Link> {/* Change to Link component */}
          </div>
        </header>

        {/* Define Routes for Home, Booking, and Contact Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} /> {/* Booking route */}
        </Routes>

        {/* Move About and Services sections to another location if needed */}
        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>We are your go-to Mirror Photobooth service, adding a dash of magic to any event. Whether it's a wedding, corporate event, or private party, we bring the fun to you with modern, interactive photo experiences.</p>
        </section>

        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service">
              <h3>Weddings</h3>
              <p>Our Mirror Photobooth adds elegance and fun to any wedding. Capture candid, beautiful moments with ease.</p>
            </div>
            <div className="service">
              <h3>Corporate Events</h3>
              <p>Bring a touch of creativity and engagement to your corporate event with our sleek, interactive Mirror Photobooth.</p>
            </div>
            <div className="service">
              <h3>Private Parties</h3>
              <p>Birthdays, anniversaries, reunions – any party becomes more fun with our mirror photobooth in the mix.</p>
            </div>
          </div>
        </section>

        <footer>
          <p>&copy; 2024 Mirror Magic | All rights reserved</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
