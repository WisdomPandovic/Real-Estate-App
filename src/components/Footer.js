import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
        <div className='footer-icon'>
            <div><h3>Panda Estate</h3></div>
            <div>
      <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={40} color="#1DA1F2" className='iconz'/>
      </a>
      <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={40} color="#1877f2" className='iconz'/>
      </a>
      <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} color="#e4405f" className='iconz'/>
      </a>
      <a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} color="#0077b5" className='iconz' />
      </a>
    </div>
        </div><hr></hr>
        <div className="footer-container">
      <div className="footer-section">
        <h4>Popular Searches</h4>
          <li>Apartment for Rent</li>
          <li>Apartment Low to hide</li>
          <li>Offices for Buy</li>
          <li>Offices for Rent</li>
      </div>

      <div className="footer-section">
        <h4>Contact Info</h4>
        <li>Call-centre: 1 (323) 938-5798</li>
        <li>Fax: 1 (888) 637-7262</li>
        <li>Email: info@styleixthemes.com</li>
        <li>1840 E Garvey Avenue Street</li>
        <li>West Covina, CA 91791, U.S.</li>
        <li>Monday – Friday: 9:00am – 9:00pm</li>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
          <li>Pricing Plans</li>
          <li>Our Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
      </div>

        <div className="footer-section">
           <h4>Information</h4>
          <li>Apartment for Rent</li>
          <li>Apartment Low to hide</li>
          <li>Offices for Buy</li>
          <li>Offices for Rent</li>
      </div>
      </div>
        <div className='footerz'>
            &copy; 2023 Panda Estate | All rights reserved.
           <p>Developed & Maintained by Panda</p>

        </div>
    </footer>
  );
}

export default Footer;
