import React, { useState, useEffect  } from 'react';
import Nav from "../Nav";
import { useParams } from 'react-router-dom';
import { houseData } from '../ProductsDatas/ProperrtyOneData';
import { officeData } from '../ProductsDatas/OfficePropertyData';
import {apartmentData} from '../ProductsDatas/HousePropertyData';
import {studioData} from '../ProductsDatas/StudioPropertyData';
import {clubhouseData} from '../ProductsDatas/ClubHouseData';
import {townhomeData} from '../ProductsDatas/TownHome';
import './PropertyList.css';
import Footer from '../Footer';
import { FaEye, FaHome, FaHeart, FaBed, FaShower, FaUtensils  } from 'react-icons/fa'; 

function PropertyList() {
  const { type } = useParams();

  // Select the appropriate data based on the type
  const selectedData = type === 'apartment' ? houseData : type === 'offices' ? officeData : type === 'houses' ? apartmentData : type === 'studio' ? studioData : type === 'clubhouse' ? clubhouseData : type === 'townhome' ? townhomeData :[];
  
  // Log the values to the console for debugging
  console.log('Type:', type);
  console.log('Selected Data:', selectedData);



  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Add event listener to window scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run effect only once

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    // Check if type is defined
  if (!type) {
    console.log('Error: Property type is not specified.');
    return <div>Error: Property type is not specified.</div>;
  }

  // Filter the properties based on the selected type
  const filteredProperties = selectedData.filter(
    property => {
      console.log('Property:', property);
      console.log('Property Type:', property.type);
      console.log('Comparison Result:', new RegExp(type, 'i').test(property.type));
      return new RegExp(type, 'i').test(property.type);
    }
  );

  console.log('Filtered Properties:', filteredProperties);

  return (
    <div className='p-bk'>
        <Nav/>
        <div className='wd-80'>
            <h2 className='propert-header'>List of {type} Properties</h2>
            <p className='property-header'>{filteredProperties.length} results</p>
            <ul className="property-list">
    
                {filteredProperties.map(property => (
                    <li key={`${property.id}-${property.type}`} className="property-product">
                    <div className="image-container">
                    <img src={property.imageUrl} alt={property.title} />
                    <FaHeart className="heart-icon" />
                  </div>
                         <h3>{property.title}</h3>
                         <p>Price: {property.price}</p>
                        <p>Location: {property.location}</p>
                    </li>
                ))}

            </ul>
            
            {showBackToTop && (
          <button className='back-to-top' onClick={scrollToTop}>
            Back to Top
          </button>
        )}
        </div>
        <Footer/>
    </div>
  );
}

export default PropertyList;
