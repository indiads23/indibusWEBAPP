'use client'
import React from 'react'

const Footer = () => {
  return (
    
      <div className='footer'>
        <div className='footerContainer'>
          <div className='row'>
            <div className='footerContent'>
              <form action="">
                <textarea name="" id="" placeholder='FeedBack' cols="30" rows="5"></textarea>
                <button type='Submit'> Submit </button>
              </form>
            </div>
            <div id='logocontainer' className='footerContent'>
                <img className='footerlogo' src="./xlogo.png" alt="xlogo" />
                <img className='footerlogo' src="./facebooklogo.png" alt="xlogo" />
                <img className='footerlogo' src="./instalogo.png" alt="xlogo" />
                <img className='footerlogo' src="./gmaillogo.png" alt="xlogo" />
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
