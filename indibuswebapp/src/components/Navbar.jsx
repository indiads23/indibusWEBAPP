'use client'
import React from 'react'
import Link from 'next/link'
import { IoMdHome } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link href="/" style={{color:"#FFFFFF"}}>
        <div className="logo">
            <img className='logoImage'
                src='/newlogo.jpg'
            />
        </div>
        </Link>
        
        <ul className="nav-links">

         
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

          
          <div className="menu">
            <li><Link href="/"><IoMdHome className='navSigns'/>  Home</Link></li>
            <li><Link href="/interprice"><BsFillBuildingsFill className='navSigns'/>  StartUps and Incubation </Link></li>
            <li><Link href="/contactUs"><GrContact className='navSigns'/>  Contact</Link></li>

            <li className="services">
              <Link href="/services"><MdDesignServices className='navSigns'/>  Services</Link>
            </li>

            <li><Link href="/adminlogin"><MdAccountBox className='navSigns'/>  Sign In</Link></li>
            {/* <li><Link href="#contact">Contact</Link></li> */}
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
