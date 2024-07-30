'use client'
import React from 'react'
import styles from "../page.module.css"
import Location from '@/components/Location'
import Contactform from '@/components/Contactform'
import { CiMail } from "react-icons/ci";

const ContactPage = () => {
  return (
    <div>
      <div className={styles.contmain}>
          <div className={styles.contformcontainer}>
            <div className={styles.contform}>
                <h1 className={styles.conth1} >Get in <span className={styles.touch}>Touch</span></h1>
                <p className={styles.formp} >Welcome to Awesome World of InDiBus where Your business gets some new and big wings to fly higher.</p>
                <Contactform/>
                 <div className={styles.conticon}>
                    <div className={styles.contphone}>
                       <img src="./phoneiconbw.png" alt=""/>
                        <div><p id={styles.numb1}>+91 93100 09063</p><p id={styles.numb2}>+91 82998 97560</p></div>

                    </div>
                    <div className={styles.contmail}>
                    <CiMail />
                      <p>official@indibus.net</p>
                    </div>
                   
                </div>
            </div>
            <div className={styles.loctest}>
            <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="3000" className={styles.location}>
            <Location/>
          </div>
            </div>

          </div>
          
      </div>
    </div>
  )
}

export default ContactPage
