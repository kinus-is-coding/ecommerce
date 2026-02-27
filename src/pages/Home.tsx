import React from 'react'
import { productsData,type Product } from '../data/products'
import Productcard from '../components/Productcard'
import './Home.css'
const Home: React.FC = () => {
  const products=productsData.map((item:Product)=>(
    <Productcard item={item}/>
  ))
  
  return (
    <div className='page'>
      <div className='home-hero'>
        <h1 className='home-title'>Wanna anything today?</h1>
        <p className='home-subtitle'>There is no free lunch !</p>
       </div>
      <div className='container'>
        <h2 className='page-title'>Our products </h2>
        <div className='products-grid'>
          {products}
        </div>
      </div>    
    </div>
  )
}

export default Home