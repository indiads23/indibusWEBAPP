'use client'
import React from 'react'
import Link from 'next/link'
import { IoMdHome } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        
        <div className="logo">
            <img className='logoImage'
                src='/logo.png'
            />
            <h3 style={{color:'#f58d0e'}}>In</h3><h3>Di</h3><h3 style={{color:'#13ee2c'}}>Bus</h3>
        </div>

        
        <ul className="nav-links">

         
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

          
          <div className="menu">
            <li><Link href="#"><IoMdHome/>Home</Link></li>
            <li><Link href="#"><GrContact/>Contact</Link></li>

            <li className="services">
              <a href="#"><MdDesignServices/>Services</a>
            </li>

            <li><Link href="#"><MdAccountBox/>Sign In</Link></li>
            {/* <li><Link href="#contact">Contact</Link></li> */}
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
