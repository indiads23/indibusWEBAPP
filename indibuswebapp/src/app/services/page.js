'use client'
import React from 'react'
import styles from "../page.module.css"
import Link from 'next/link'

const ServicesPage = () => {
    return (
      <div className={styles.serviceshero}>
      <div className={styles.services}>
        <div className={styles.sermain}>
          <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className={styles.sermaincol1}>
              <h1 className={styles.sermainh1}>We deliver the best <span className={styles.digitalspan} >Digital Solution</span> for your business.</h1>
          </div>
          <div  className={styles.sermaincol2}>
              <img className={styles.sermainimg} src='./servicepage2.png' alt='img'/>
          </div>
        </div>
        <div className={styles.softwareh1}>
                <h1>Software Developement</h1>
              </div>
        <div className={styles.sercards}>
              <div className={styles.sercardsrow1}>
                  <div data-aos="zoom-out-up" id={styles.card1} className={styles.card}>
                    <img className={styles.card1img} src='./card1website.png' alt='img'/>
                    <h2>Website Development</h2>
                    <p>InDiBus innovation meets elegance in website development! Our expert team of skilled developers is dedicated to crafting stunning and responsive websites tailored to your unique vision and business needs.</p>
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                        
                  </div>
                  <div data-aos="zoom-out-up" id={styles.card2} className={styles.card}>
                  <img className={styles.card2img} src='./card2app.png' alt='img'/>
                    <h2>App Developement</h2>
                    <p>InDiBus innovation transforms ideas into extraordinary apps. Our skilled team of developers specializes in crafting seamless and cutting-edge mobile applications.</p>
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                      
                  </div>
                  <div data-aos="zoom-out-up" id={styles.card3} className={styles.card}>
                  <img className={styles.card3img} src='./card3.png' alt='img'/>
                    <h2>Customized Software</h2>
                    <p>We specialize in creating customized software that precisely aligns with your unique business needs.</p>
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                       
                  </div>
              </div>
              <div className={styles.contentcreation}>
                <h1>Content Creation</h1>
              </div>
             
              <div className={styles.sercardsrow1}>
                  <div data-aos="zoom-out-up" id={styles.card4} className={styles.card}>
                  <img className={styles.card4img} src='./card4.png' alt='img'/>
                    <h2 className={styles.card4h1}>Social media management</h2>
                    <p>Supercharge your online presence with InDiBus. We understand the dynamic landscape of social media and offer comprehensive solutions to elevate your brand's visibility, engagement, and success.</p>
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                    
                        
                  </div>
                  <div data-aos="zoom-out-up" id={styles.card5} className={styles.card}>
                  <img className={styles.card4img} src='./card4.png' alt='img'/>
                    <h2>Advertisement</h2>
                    <p>Step into the spotlight with InDiBus. Our team of creative minds and marketing experts is dedicated to crafting compelling advertisements that captivate your audience and drive results.</p>
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                      
                  </div>
                  <div data-aos="zoom-out-up" id={styles.card6} className={styles.card}>
                  <img className={styles.card6img} src='./card6.png' alt='img'/>
                    <h2>Videos</h2>
                    <p>Unleash the power of visual storytelling with InDiBus. We specialize in creating captivating and impactful videos that bring your brand, message, or story to life.</p> 
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                  </div>

                  <div data-aos="zoom-out-up" id={styles.card7} className={styles.card}>
                  <img className={styles.card7img} src='./card7.png' alt='img'/>
                    <h2>Graphics</h2>
                    <p>Ignite visual brilliance with InDiBus. Our team of talented graphic designers is dedicated to transforming your ideas into stunning visual masterpieces that leave a lasting impression.</p> 
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                  </div>
              </div>

              <div className={styles.contentcreation}>
                <h1>Google My Business</h1>
              </div>

              <div className={styles.googlemycard}>
              <div data-aos="zoom-out-up" id={styles.cardgo1} className={styles.card}>
                  <img className={styles.seo1} src='./seo1.png' alt='img'/>
                    <h2 className={styles.card4h1}>List your Business on Google</h2>
                    <p>Get noticed where it matters most – list your business on Google with InDiBus. Unlock the power of local visibility and connect with customers actively searching for businesses like yours.</p>
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                  </div>
                  <div data-aos="zoom-out-up" id={styles.cardgo2} className={styles.card}>
                  <img className={styles.cardgo2img} src='./cardgo2.png' alt='img'/>
                    <h2 className={styles.card4h1}>Local SEO</h2>
                    <p>Boost your local visibility and connect with customers in your community with InDiBus. Our dedicated team specializes in Local SEO strategies that propel your business to the forefront of local search results, ensuring that you stand out when it matters most.</p>
                    <Link href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></Link>
                  </div>

              </div>


        </div>
      </div>
      </div>
)
}
export default ServicesPage
