import React from 'react'
import './Navbar.css'
import logo from './images/mazars-logo.png'

 
export default function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <input type="text" placeholder="Search" />
    </nav>
  )
}
