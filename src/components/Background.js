import React from 'react';
import './Background.css'; 

function Background() {
  return (
    <div className="background-component">
      <div className="background-column">
        <div className="background-overlay">
            <h3>Want to sell your home?</h3>
            <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
        </div>
      </div>
      <div className="background-column">
        <div className="background-overlay">
          <h3>Looking for new Home?</h3>
          <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
        </div>
      </div>
    </div>
  );
}
export default Background;
