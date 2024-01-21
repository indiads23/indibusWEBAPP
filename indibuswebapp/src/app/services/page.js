import React from 'react'
import styles from "../page.module.css"

const ServicesPage = () => {
    return (
      <div className={styles.serviceshero}>
      <div className={styles.services}>
        <div className={styles.sermain}>
          <div className={styles.sermaincol1}>
              <h1 className={styles.sermainh1}>We deliver the best <span className={styles.digitalspan} >Digital Solution</span> for your business.</h1>
          </div>
          <div className={styles.sermaincol2}>
              <img className={styles.sermainimg} src='./servicepage2.png' alt='img'/>
          </div>
        </div>
        <div className={styles.softwareh1}>
                <h1>Software Devlopement</h1>
              </div>
        <div className={styles.sercards}>
              <div className={styles.sercardsrow1}>
                  <div id={styles.card1} className={styles.card}>
                    <img className={styles.card1img} src='./card1website.png' alt='img'/>
                    <h2>Website Development</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p>
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                        
                  </div>
                  <div id={styles.card2} className={styles.card}>
                  <img className={styles.card2img} src='./card2app.png' alt='img'/>
                    <h2>App Devlopement</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p>
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                      
                  </div>
                  <div id={styles.card3} className={styles.card}>
                  <img className={styles.card3img} src='./card3.png' alt='img'/>
                    <h2>Customized Software</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p>
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                       
                  </div>
              </div>
              <div className={styles.contentcreation}>
                <h1>Content Creation</h1>
              </div>
             
              <div className={styles.sercardsrow1}>
                  <div id={styles.card4} className={styles.card}>
                  <img className={styles.card4img} src='./card4.png' alt='img'/>
                    <h2 className={styles.card4h1}>Social media management</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p>
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                    
                        
                  </div>
                  <div id={styles.card5} className={styles.card}>
                  <img className={styles.card4img} src='./card4.png' alt='img'/>
                    <h2>Advertisement</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p>
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                      
                  </div>
                  <div id={styles.card6} className={styles.card}>
                  <img className={styles.card6img} src='./card6.png' alt='img'/>
                    <h2>Videos</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p> 
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                  </div>

                  <div id={styles.card7} className={styles.card}>
                  <img className={styles.card7img} src='./card7.png' alt='img'/>
                    <h2>Graphics</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p> 
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                  </div>
              </div>

              <div className={styles.contentcreation}>
                <h1>Google My Business</h1>
              </div>

              <div className={styles.googlemycard}>
              <div id={styles.cardgo1} className={styles.card}>
                  <img className={styles.seo1} src='./seo1.png' alt='img'/>
                    <h2 className={styles.card4h1}>Creation Optimization</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p>
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                  </div>
                  <div id={styles.cardgo2} className={styles.card}>
                  <img className={styles.cardgo2img} src='./cardgo2.png' alt='img'/>
                    <h2 className={styles.card4h1}>Local Seo</h2>
                    <p>Want to hire dedicated developers or an entire app development team? Know how much it cost to hire dedicated developers.</p>
                    <a href='/contactUs'><button className={styles.cardbutton}><p className={styles.buttonp}>Get A Quote</p></button></a>
                  </div>

              </div>


        </div>
      </div>
      </div>
)
}
export default ServicesPage