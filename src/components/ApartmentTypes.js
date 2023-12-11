import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import product1Image from '../images/apartment-properties (15).webp';
import product2Image from '../images/apartment-properties (15).webp';
import product3Image from '../images/apartment-properties (15).webp';
import product4Image from '../images/apartment-properties (11).webp';
import product5Image from '../images/pexels-photo-2507010.webp';
import product6Image from '../images/pexels-photo-1571459.jpeg';
function ApartmentTypes() {
  const products = [
    {
      id: 1,
      type: 'Apartment',
      properties: 20,
      imageUrl: product1Image,
    },
    {
      id: 2,
      type: 'Offices',
      properties: 10,
      imageUrl: product2Image,
    },
    {
      id: 3,
      type: 'Houses',
      properties: 9,
      imageUrl: product3Image,
    },
    {
        id: 1,
        type: 'Studio',
        properties: 4,
        imageUrl: product4Image,
      },
      {
        id: 2,
        type: 'TownHome',
        properties: 5,
        imageUrl: product5Image,
      },
      {
        id: 3,
        type: 'ClubHouse',
        properties: 4,
        imageUrl: product6Image,
      },
  ];

  return (
    <div className='wd-70 txt-c'>
      <h3>Explore Apartment Types</h3>
      <p>Explore all the different types of apartments so you can choose the best option for you</p>
      <div className='row'>
        {products.map(product => (
          // <div key={product.id} className='column'>
           <Link to={`/properties/${product.type.toLowerCase()}`} key={product.id} className='column'>
            <img src={product.imageUrl} alt={product.title} />
            <div className='text-overlay'>
              <h3>{product.type}</h3>
              <p>Properties: {product.properties}</p>
            </div>
              </Link>
          // </div>
        ))}
      </div>
    </div>
  );
}
export default ApartmentTypes;