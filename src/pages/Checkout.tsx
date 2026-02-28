import React from 'react'
import { useCart } from '../context/CartContext'
import './Checkout.css'
const Checkout: React.FC = () => {
  const {getCartItemWithProduct,removeItem,updateQuantity,getCartTotal}=useCart()
  const cartItems=getCartItemWithProduct()
  const total=getCartTotal()
  return (
    <div className='checkout-page'>
      <div className='container'> 
        <h1 className='checkput-title'>Checkout</h1>
        <div className='checkout-container'>
          <div className='checkout-items'>
            <h2 className='checkout-section-title'>Order Summary</h2>
            {cartItems.map((item)=>(
              <div className='checkout-item'>

                <img src={item.product.image} alt="" className='checkout-item-img'/>
                
                <div className='checkout-item-content'>
                  <h3 className='checkout-item-name'>{item.product.name}</h3>
                  <p className='checkout-item-price'>{item.product.price }</p>
                </div>

                <div className='checkout-item-controls'>
                  <div className='quantity-controls'>
                    <button className='quantity-btn' onClick={()=>updateQuantity(item.id,item.quantity-1)}>-</button>
                    <span className='quantity-value'>{item.quantity}</span>
                    <button className='quantity-btn' onClick={()=>updateQuantity(item.id,item.quantity+ 1)}>+</button>
                  </div>
                  <p className='checkout-item-total'>
                    ${item.product.price*item.quantity}
                  </p>
                  <button className='btn btn-secondary' onClick={()=>removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='checkout-summary'>
            <h2 className='checkout-section-title'>Total</h2>
            <div className='checkout-total'>
              <p className='checkout-total-label'>Total:</p>
              <p className='checkout-total-value'>{total}</p>
            </div>
            <button className='btn btn-primary'>Place order</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Checkout