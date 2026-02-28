import React from 'react'
import { navItems,type NavItem } from '../config/NavBar'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../context/AuthContext'
const Navbar: React.FC = () => {
    const Navlist=navItems.map((item: NavItem)=>(
            <NavLink 
            key={item.path} 
            to={item.path} 
            className='navbar-link'
          >
            {item.label}
          </NavLink>))
    const {User,logout}=useAuth()
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <NavLink to="/" className='navbar-brand'>Kinus's shop</NavLink>
            <div className='navbar-links'>
                {Navlist}
            </div>
            <div className='navbar-auth'>


                {!User?
                    <div className='navbar-auth-links'>
                        <NavLink to="/auth" className='btn btn-secondary'>Login</NavLink> 
                        <NavLink to="/auth" className='btn btn-primary'>Register</NavLink> 
                    </div>
                : 
                    <div className='navbar-user '>
                        <span>Hello {User.email}</span>
                        <button className='btn btn-secondary' onClick={logout}>Logout</button>
                    </div>
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar