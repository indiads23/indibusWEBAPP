'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
          <div className='smallfoot'>
            <div className='footrow'>
                <div className='col4'>
                    <h2 className='indip'>
                      <span id='in'>In</span>
                      <span id='di'>Di</span>
                      <span id='bus'>Bus</span>
                    </h2>
                    <p className='indip2' style={{color:'white'}} >Sdsdhjbc hshjfsbhfslfdfvdv <br/>shdfbrufhuec cerbhfvdfvdf</p>
                </div>
                <div className='col4a'>
                   <h3>Contacts</h3>
                   <div className='contacts'>
                    <img className='phicon' src="./phone.svg" alt="phone" />
                      <div className='number'>
                        <p>+918299800XXX</p>
                        <p>+917308989XXX</p>
                      </div>
                   </div>
                   <div className='location'>
                    <img className='phicon' src="./location.svg" alt="location" />
                      <div className='number'>
                        <p>ABESIT Qwertyty</p>
                      </div>
                   </div>

                </div>
                <div id='company' className='col4a'>
                   <h3>Company</h3>
                   <ul>
                    <li><a className='footlink' href='#'>HOME</a></li>
                    <li><a className='footlink' href='#'>SERVICES</a></li>
                    <li><a className='footlink' href='#'>CONTACTS</a></li>
                   </ul>
                </div>
                <div id='feedback' className='col4a'>
                   <h3>Feedback</h3>
                   <div className='feed'>
                        <textarea id="story" name="story" rows="6" cols="28">

                        </textarea>
                        <button className='btnicon' ><img className='sendicon' src="./send.svg" alt="send" /></button>
                    </div>
                </div>
              </div>
            </div> 
            <hr />
               <div id='logocontainer' className='footerContent'>
                <SocialIcon id='facebook' className='footerlogo' url='https://www.facebook.com/indibus23?mibextid=gik2fB'/>
                <SocialIcon id='x' className='footerlogo'  url='https://x.com/indibus23?t=WDqQVpPbmi0QF2m0fXmHGg&s=08'/>
                <SocialIcon id='instagram' className='footerlogo' url='https://www.instagram.com/indibus23?igsh=MXN5aGQ4YW9vcTU4aA=='/>
                <SocialIcon id='linkedin' className='footerlogo' url='https://www.linkedin.com/company/indibus23/'/>
              </div>
              <div className='copyright'>
                <p id='copy' >&#9400;InDiBus 2024</p>
              </div>
          </div>

    </div>
  )
}

export default Footer
