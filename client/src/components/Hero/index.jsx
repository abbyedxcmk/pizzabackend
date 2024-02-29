import React from 'react';

function HeroSection() {
  return (
    <div className="hero-section">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Logo */}
      <img src="/path/to/logo.png" alt="Logo" className="logo" />

      {/* Button */}
      <button className="cta-button">Get Started</button>
    </div>
  );
};

export default HeroSection;