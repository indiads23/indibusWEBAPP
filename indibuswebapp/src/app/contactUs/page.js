import React from 'react'
import styles from "../page.module.css"
import Location from '@/components/Location'
import Contactform from '@/components/Contactform'



const ContactPage = () => {
  return (
    <div>
      <div className={styles.contmain}>
          <div className={styles.contformcontainer}>
            <div className={styles.contform}>
                <h1 className={styles.conth1} >Get in <span className={styles.touch}>Touch</span></h1>
                <p className={styles.formp} >Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                <Contactform/>
                 <div className={styles.conticon}>
                    <div className={styles.contphone}>
                       <img src="./phoneiconbw.png" alt=""/>
                      <p>+91 93100 09063</p>
                    </div>
                    <div className={styles.contphone}>
                       <img src="./emailbw.png" alt=""/>
                      <p>indibus2024@gmail.com</p>
                    </div>
                   
                </div>
            </div>
          </div>
          <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="3000" className={styles.location}>
            <Location/>
          </div>
      </div>
    </div>
  )
}

export default ContactPage
