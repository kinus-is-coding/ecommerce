import React from 'react'
import { NavLink } from 'react-router-dom'
import {type Product } from '../data/products'
const Productcard: React.FC<{ item: Product }> = ({ item }) => {
    
  return (
     <div className='product-card' key={item.id}>
          <img src={item.image} className='product-card-img' />
          <div className='product-card-content'>
            <h3 className='product-card-name'>{item.name}</h3>
            <p className='product-card-price'>{item.price}</p>
            <div className='product-card-action'>
              <NavLink className='btn btn-secondary'>View details</NavLink>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
        </div>
  )
}

export default Productcard