
import React from 'react';
import "../App.css"
import { houseData } from './ProductsDatas/productsData';

function HouseList(){
return (
    <div className='bk-whitesmoke'>
        <div className='wd-70'>
        <h3 className='recent'>Recent Listings</h3>
        <div className="product-grid">
      {houseData.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <div className='flex'>
          <p>Price: {product.price}</p>
          <p>Location: {product.location}</p>
          </div>
          
          <div className='flex'> 
              <p>Size: {product.size}</p>
              <p>Rooms: {product.rooms}</p>
            </div><hr></hr>
          <div className={product.availability === 'sold' ? 'sold' : 'available'}>
            {product.availability}
          </div>
         
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default HouseList;