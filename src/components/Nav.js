import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 
import { FaHeart  } from 'react-icons/fa'; 

const Nav = () => {
  return (
    <div>
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
          <li>
            <i>
              <FaHeart className='blue'/>
            </i>
          </li>
        </ul>
      </div>
    
    </nav>
    <div className="hamburger_container flex">
        <label htmlFor="menu_check">&#9776;</label>
        <input type="checkbox" id="menu_check"/>
        <div className="hide_nav_container">
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/properties">Properties</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li> <Link to="/blog">Blog</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                </ul>
            </nav>
        </div>

        <div className="display-n mg"><h3>Panda Estate</h3></div>
        <div className="display-n mg"> <i>
              <FaHeart className='blue'/>
            </i></div>
       
    </div>
    </div>
  );
};

export default Nav;
