// Footer.js
import React from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from  "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p className='footer'>&copy; 2024 Food Delivery Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
