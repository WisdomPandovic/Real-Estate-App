import React, { useState, useEffect } from 'react';

function RealEstateBlog() {
  const [realEstateData, setRealEstateData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setRealEstateData(data))
      .catch(error => console.error('Error fetching real estate data:', error));
  }, []);

  return (
    <div>
      <h2>Real Estate Properties</h2>
      <div>
        {realEstateData.map(property => (
          <div key={property.id}>
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealEstateBlog;
