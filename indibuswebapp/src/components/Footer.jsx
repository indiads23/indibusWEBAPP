import React from 'react'
import "../app/footer.css"
import { BsInstagram, BsLinkedin, BsTwitch, BsTwitter } from 'react-icons/bs'
import { GrGoogle } from 'react-icons/gr'

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div className="footer-logo">
          <img className='logoImage'
            src='/newlogo.jpg'
          />
        </div>
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="/interprice">Startups & Incubation</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contactUs">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="https://www.instagram.com/indibus23/"><BsInstagram /></a>
              <a href="https://x.com/indibus23"><BsTwitter /></a>
              <a href="https://indibus.net/"><GrGoogle/></a>
              <a href="https://www.linkedin.com/company/indibus23/mycompany/"><BsLinkedin /></a>
            </div>
          </div>
        </div>
        
      </div>
      <div className='footer-copy'>
                <h5>Made With &#10084; under INDIBUS</h5>
                <small>Copyright &copy; IndiBus || ABESIT , GHAZIABAD</small>
            </div>
    </footer>
  )
}
