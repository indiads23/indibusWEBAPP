'use client'
import React from 'react'
import styles from "../app/page.module.css"



const Testimonial = () => {
  return (
    <div>
        <div className={styles.testcontainer}>
            <div className={styles.testhead} >
                <p id={styles.testp}>TESTIMONIALS</p>
                <h2 id={styles.testh2}>What our clients say about us.</h2>
            </div>
            <div className={styles.testrow}>
                <div data-aos="fade-up" data-aos-duration="1000" className={styles.testimonial1}>
                  <div className={styles.person}>
                    <img className={styles.testimg} src="./1598531454220ar.jpeg" alt="" />
                    <div className={styles.per1}>
                      <p className={styles.namep} >Dr.Arpita Gupta</p>
                      <p className={styles.namep1} >Dean Incubation and Startup ABES Institute of Technology, Ghaziabad</p>
                    </div>
                  </div>
                   <img className={styles.quotes} src="./quotes.png" alt="quotes" />
                   <p className={styles.tp} >We have been working with Indibus for over a year now, and we have been consistently impressed with their work.</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className={styles.testimonial1}>
                <div className={styles.person}>
                    <img className={styles.testimg} src="./logo.png" alt="" />
                    <div className={styles.per1}>
                      <p className={styles.namep} >Mr Ashish Sharma</p>
                      <p className={styles.namep1} >Onwer MR Enterprises Ghaziabad</p>
                    </div>
                  </div>
                   <img className={styles.quotes} src="./quotes.png" alt="quotes" />
                   <p className={styles.tp} >We have been working with Indibus for several months now, and we have been very impressed with their work.</p>
                   </div>

                   <div data-aos="fade-up" data-aos-duration="1000" className={styles.testimonial1}>
                    <div className={styles.person}>
                    <img className={styles.testimg} src="./logo.png" alt="" />
                    <div className={styles.per1}>
                      <p className={styles.namep} >Mr. Asgar Khan</p>
                      <p className={styles.namep1} >Owner Shaheen Di Kitchen Ghaziabad</p>
                    </div>
                  </div>
                   <img className={styles.quotes} src="./quotes.png" alt="quotes" />
                   <p className={styles.tp} >They have helped us to develop effective advertising campaigns that have generated leads and sales.</p>
                   </div>

                   <div data-aos="fade-up" data-aos-duration="1000" className={styles.testimonial1}>
                    <div className={styles.person}>
                    <img className={styles.testimg} src="./1556599061677se.jpeg" alt="" />
                    <div className={styles.per1}>
                      <p className={styles.namep} >Sheelesh Kumar Sharma</p>
                      <p className={styles.namep1} >Professor (CSE) ABESIT Engineering College Ghaziabad</p>
                    </div>
                  </div>
                   <img className={styles.quotes} src="./quotes.png" alt="quotes" />
                   <p className={styles.tp} >They create absolutely stunning content and helped in making effective online presence of my business.</p>
                   </div>

            </div>

        </div>
    </div>
  )
}
export default Testimonial