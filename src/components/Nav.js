import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

const Nav = () => {
  return (
    <nav>
      <div className="left-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
