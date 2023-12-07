import React from 'react';
import './RealEstateAgentComponent.css';

function RealEstateInquiryComponent() {
    return (
      <div className="bk-whitesmoke">
          <div className="inquiry-container">
        <h2>Real Estate Inquiry Form</h2>
        
        <div className='real-Estate-Inquiry'></div>
        <form className="inquiry-form">
          <div className="form-section">
            <label htmlFor="inquiryType">Inquiry Type</label>
            <select id="inquiryType" name="inquiryType">
              <option>Apartments</option>
              <option>Houses</option>
              <option>Offices</option>
              <option>Studio</option>
            </select>
          </div>

          <div className="form-section">
            <label htmlFor="inquiryType">Personal Info</label>
            <select id="inquiryType" name="inquiryType">
              <option>Seller</option>
              <option>Buyer</option>
            </select>
          </div>
  
          <div className="form-section">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>

          <div className="form-section">
          <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
  
          <div className="form-section">
          <label htmlFor="minSize">Minimum Size (Sq Ft)</label>
            <input type="text" id="minSize" name="minSize" placeholder="Minimum size" />
          </div>

          <div className="form-section">
            <label htmlFor="maxPrice">Max Price</label>
            <input type="text" id="maxPrice" name="maxPrice" placeholder="Max price" />
          </div>

          <div className="form-section">
          <label htmlFor="address">How to Address You</label>
            <select id="inquiryType" name="inquiryType">
              <option>Select Value</option>
              <option>Mr</option>
              <option>Mrs</option>
            </select>
          </div>
  
          <button type="submit">Submit</button>
        </form>
  
        <div className="text-section">
          <h3>Why Choose Us</h3>
          <p>
            It’s our job to get you the best price for your home and make sure that you get the best possible deal on the property.
          </p>
          <p>
            Wide Range of Properties: With a robust selection of popular properties on hand, as well as leading properties from real estate experts.
          </p>
          <p>
            Financing Made Easy: Our stress-free finance department can find financial solutions to save you money.
          </p>
          <p>
            Trusted by Thousands: 10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
          </p>
        </div>
      </div>
      </div>
    );
  }

export default RealEstateInquiryComponent;
