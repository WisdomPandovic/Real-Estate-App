import React from 'react';
import { FaUser } from 'react-icons/fa';
import './RealEstateAgentComponent.css'; 

function RealEstateAgentComponent() {
  return (
    <div className='bk-green'>
      <div className="agent-grid-container">
        <div className="agent-grid-item">
          <h3>Become a Real Estate Agent</h3>
          <p>Join our team of skilled real estate professionals and start your rewarding career today!</p>
        </div>

        <div className="agent-grid-item">
          <button className="register-button">
            <FaUser className="user-icon" />
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RealEstateAgentComponent;
