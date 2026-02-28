import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import {type Product } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductDetails.css'
const ProductDetails:React.FC = () => {
    const {id}=useParams<{id:string}>()
    const [product,setProduct]=useState<Product|null>(null);
    const {addToCart}= useCart()
    const navigate=useNavigate()


    useEffect(()=>{
        const foundproduct=getProductById(id)
        if(!foundproduct){
            navigate("/")
            return 
        }
        setProduct(foundproduct)
    },[id])
    if(!product){
        return <h1>Loading...</h1>
    }
  return (
    <div className='detail-page'>
        <div className='container'>
            <div className='product-detail'>
                <div className='product-detail-img'>
                    <img src={product.image} alt="" />
                </div>
                <div className='product-detail-content'>
                    <h1 className='product-detail-name'>{product.name}</h1>
                    <p className='product-detail-price'>{product.price}</p>
                    <p className='product-detail-description'>{product.description}</p>
                    <button className='btn btn-primary' onClick={()=>addToCart(product.id)}>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails