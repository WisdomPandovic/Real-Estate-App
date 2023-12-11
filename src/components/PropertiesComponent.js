import React from 'react';
import './PropertiesComponent.css'; 
import product1Image from '../images/pexels-photo-1571459.jpeg';
import product2Image from '../images/studio-properties (1).webp';
import product3Image from '../images/apartment-properties (6).webp';
import product4Image from '../images/apartment-properties (3).webp';
import product5Image from '../images/download (2).jpg';
import { FaEye, FaHome, FaHeart, FaBed, FaShower, FaUtensils  } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

function PropertiesComponent() {
  const properties = [
    {
        id: 1,
        type: 'Buy',
        type2: 'Rent',
        title: 'Awesome Family Home',
        price: '$1200/month',
        location: 'City X',
        imageUrl: product4Image,
        bed: 2,
        bath: 2,
        kitchen: 1,
      },
      {
        id: 2,
        type: 'Buy',
        type2: 'Rent',
        title: 'Contenporary Studio',
        price: '$250,000',
        location: 'City Y',
        imageUrl: product5Image,
        bed: 2,
        bath: 2,
        kitchen: 1,
      },
    {
      id: 1,
      type: 'Buy',
      type2: 'Rent',
      title: 'Awesome Family Home',
      price: '$1200/month',
      location: 'City X',
      imageUrl: product1Image,
      bed: 2,
      bath: 2,
      kitchen: 1,
    },
    {
      id: 2,
      type: 'Buy',
      type2: 'Rent',
      title: 'Contenporary Studio',
      price: '$250,000',
      location: 'City Y',
      imageUrl: product2Image,
      bed: 2,
      bath: 2,
      kitchen: 1,
    },
    {
        id: 1,
        type: 'Buy',
        type2: 'Rent',
        title: 'Studio Bay View',
        price: '$1200/month',
        location: 'City X',
        imageUrl: product3Image,
        bed: 2,
      bath: 2,
      kitchen: 1,
      },
      {
        id: 2,
        type: 'Buy',
        type2: 'Rent',
        title: 'Studio in Homestead',
        price: '$250,000',
        location: 'City Y',
        imageUrl: product1Image,
        bed: 3,
      bath: 2,
      kitchen: 1,
      },
  ];

  return (
    <div className="bk-whitesmoke">
        <div className='text-center mt'>
            <h3>Properties For Rent</h3>
            <p>Search over 2000 properties to rent from the top agents in the country</p>
        </div>
        <div className="properties-component">
      {properties.map(property => (
        <div key={property.id} className="property-column">
          <div className="property-img">
            <img src={property.imageUrl} alt={property.title} />
            <div className="property-icons">
              <i>
                <FaEye className='blue' />
                <FaHome className='blue'/>
                <FaHeart className='blue'/>
              </i>
            </div>
            <div className="property-label">{property.type}</div>
            <div className="property-label2">{property.type2}</div>
          </div>
          <div className="property-details">
            <h3>{property.title}</h3>
            <p>{property.price}</p>
            <div className="property-icons-details">
              <p>
                <FaBed /> {property.bed}
              </p>
              <p>
                <FaShower /> {property.bath}
              </p>
              <p>
                <FaUtensils /> {property.kitchen}
              </p>
            </div>
          </div>
        </div>
      ))}
        </div>

        <div className="button-container">
            <button><Link to="#">View More</Link></button>
        </div>
    </div>
  );
}

export default PropertiesComponent;
