// src/Booking.js
import React, { useEffect } from 'react';
import './Booking.css'; // Import the CSS file

const Booking = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="booking" className="booking-section">
      <h2>Book an Appointment</h2>
      <p>Ready to capture your event in style? Book your appointment directly below using our scheduling partner.</p>
      <div className="calendly-inline-widget" data-url="https://calendly.com/archie-onesa-7/mirror-photobooth-booking" style={{ minWidth: "320px", height: "630px" }}></div>
    </section>
  );
};

export default Booking;
