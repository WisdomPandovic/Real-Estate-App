import React from 'react';
import '../App.css';
import product1Image from '../images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMTk1MTAyNjQ5NDktaW1hZ2Uta3liZW1xZnMuanBn.webp';
import product2Image from '../images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMTlfcGhvdG9faW5fZnJvbnRfbmF0dXJlX2Vjb190b3duaG91c2VfbW9kZXJuX2x1eF84OTE2NDBkNC00NGVjLTRmNWQtOTM4Ny03YzZkYjI3MTdkMGNfMS5qcGc.webp';
import product3Image from '../images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xMF9waG90b19vZl9hX21vZGVybl9ob3VzZV9pbl90aGVfY2l0eV9uYXR1cmFsX18yMDdhNWQzOC02M2E5LTRkODItOGU3NC1jYWVlZDU3MzczM2FfMS5qcGc.webp';
import product4Image from '../images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlN19oaWdoLWFuZ2xlX3JlYXJfc2lkZV9pbnRlcmlvcl9tb2Rlcm5fbGl2aW5nX3Jvb185YjlkYWZiNi04NTJiLTRiYWEtYWE1Mi02NDBmZjc1MzNmODNfMS5qcGc.webp';
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
      properties: 28,
      imageUrl: product3Image,
    },
    {
        id: 1,
        type: 'Studio',
        properties: 2,
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
        type: 'Houses',
        properties: 28,
        imageUrl: product6Image,
      },
  ];

  return (
    <div className='wd-70 txt-c'>
      <h3>Explore Apartment Types</h3>
      <p>Explore all the different types of apartments so you can choose the best option for you</p>
      <div className='row'>
        {products.map(product => (
          <div key={product.id} className='column'>
            <img src={product.imageUrl} alt={product.title} />
            <div className='text-overlay'>
              <h3>{product.type}</h3>
              <p>Properties: {product.properties}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ApartmentTypes;