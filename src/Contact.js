import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_smudia6', 'template_fjiffzt', e.target, 'KNdMdrGppq5QUxnwq')
      .then((result) => {
          setStatus('Your Inquiry has been  sent successfully!');
      }, (error) => {
          setStatus('Failed to send the message. Please try again.');
      });
    e.target.reset(); // Resets the form after submission
  };

  return (
    <div className="contact-page">
      <h2>Inquiry</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p> {/* Displays the status of the email sending */}
    </div>
  );
};

export default Contact;
