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
                   <img className={styles.quotes} src="./quotes.png" alt="quotes" />
                   <p className={styles.tp} >We have been working with Indibus for over a year now, and we have been consistently impressed with their work. They are a creative and talented team who is always coming up with new and innovative ideas.</p>
                   <img className={styles.testimg} src="./testimonial.png" alt="" />
                   
                </div>

                <div data-aos="fade-up" data-aos-duration="2000" className={styles.testimonial1}>
                   <img className={styles.quotes} src="./quotes.png" alt="quotes" />
                   <p className={styles.tp} >We have been working with Indibus for over a year now, and we have been consistently impressed with their work. They are a creative and talented team who is always coming up with new and innovative ideas.</p>
                   <img className={styles.testimg} src="./testimonial.png" alt="" />
                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className={styles.testimonial1}>
                   <img className={styles.quotes} src="./quotes.png" alt="quotes" />
                   <p className={styles.tp}>We have been working with Indibus for over a year now, and we have been consistently impressed with their work. They are a creative and talented team who is always coming up with new and innovative ideas.</p>
                   <img className={styles.testimg} src="./testimonial.png" alt="" />
                </div>

            </div>

        </div>
    </div>
  )
}
export default Testimonial