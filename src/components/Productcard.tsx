import React from 'react'
import { NavLink } from 'react-router-dom'
import {type Product } from '../data/products'
import { useCart } from '../context/CartContext'
const Productcard: React.FC<{ item: Product }> = ({ item }) => {
    const {addToCart}=useCart()
  return (
     <div className='product-card' key={item.id}>
          <img src={item.image} className='product-card-img' />
          <div className='product-card-content'>
            <h3 className='product-card-name'>{item.name}</h3>
            <p className='product-card-price'>{item.price}</p>
            <div className='product-card-action'>
              <NavLink className='btn btn-secondary' to={`/products/${item.id}`}>View details</NavLink>
              <button className='btn btn-primary' onClick={()=>addToCart(String(item.id))}>Add to cart</button>
            </div>
          </div>
        </div>
  )
}

export default Productcard