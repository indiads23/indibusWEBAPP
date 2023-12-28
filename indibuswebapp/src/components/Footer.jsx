'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    
      <div className='footer'>
        <div className='footerContainer'>
          <div className='row'>
            <div className='footerContent'>
              <form action="">
                <textarea name="" id="" placeholder='FeedBack' cols="30" rows="5"></textarea>
                <br/>
                <button className='subButton' type='Submit'> Submit </button>
              </form>
            </div>
            <div id='logocontainer' className='footerContent'>
                <SocialIcon id='x' className='footerlogo'  url='https://x.com/indibus23?t=WDqQVpPbmi0QF2m0fXmHGg&s=08'/>
                <SocialIcon id='facebook' className='footerlogo' url='https://www.facebook.com/indibus23?mibextid=gik2fB'/>
                <SocialIcon id='instagram' className='footerlogo' url='https://www.instagram.com/indibus23?igsh=MXN5aGQ4YW9vcTU4aA=='/>
                <SocialIcon id='linkedin' className='footerlogo' url='https://www.linkedin.com/company/indibus23/'/>
            </div>
            <div  id="footname" className='footerContent'>
              <div className='indi'>
                <p>
                  <span id='in'>In</span>
                  <span id='di'>Di</span>
                  <span id='bus'>Bus</span>
                  <span id='di'> 2023</span>
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Footer
