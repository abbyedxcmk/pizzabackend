

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your own Email.js template and user ID
    const serviceId = 'service_ep01xo7';
    const templateId = 'template_gdeefbr';
    const userId = 'aq2UxuasCWJTe-YuP'; 

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // add a success message 
      setName("");
      setEmail("");
      setMessage("");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        //error message
      });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className='contactForm'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;