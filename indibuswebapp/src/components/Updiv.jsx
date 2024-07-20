'use client'
import React from 'react'
import styles from "../app/page.module.css"
import Link from 'next/link'
import { MdArrowForward } from "react-icons/md";


const Updiv = () => {
  return (
    
    <div>
        <div className={styles.container}>
            <div className={styles.coro}>
              <div className={styles.corol}>
                <div className={styles.coroleft}>
                      <h1 className={styles.corolefttext}>WE ARE BUILDING<br/><span className={styles.spansoft}>SOFTWARE</span> TO HELP</h1>
                      <div className={styles.corobtn}>
                        <Link href='/services'><button className={styles.explorebuttonl}><p className={styles.expbuttonp}>Explore More<span id={styles.arrow}><MdArrowForward /></span></p></button></Link>
                      </div>
                    </div>
                </div>
               
                     <img className={styles.homeimg} src='./homeimg.jpg'/>
                
            </div>
            <h2 className={styles.h2text} >Our Exciting Service offerings</h2>
            <div className={styles.smallcontainer}>
                <div className={styles.row1}>
                    <div className={styles.col3}>
                    <div  id={styles.card1} className={styles.cardhome}>
                    <img className={styles.card1img} src='./card1website.png' alt='img'/>
                    <h2>Website Development</h2>
                    <p>INDIBUS innovation meets elegance in website development! Our expert team of skilled developers is dedicated to crafting stunning and responsive websites tailored to your unique vision and business needs.</p>
                        
                  </div>
                    </div>
                    <div className={styles.col3}>
                    <div id={styles.card2} className={styles.cardhome}>
                  <img className={styles.card2img} src='./card2app.png' alt='img'/>
                    <h2>App Developement</h2>
                    <p>INDIBUS innovation transforms ideas into extraordinary apps. Our skilled team of developers specializes in crafting seamless and cutting-edge mobile applications.</p>
                      
                  </div>
                    </div>
                    <div className={styles.col3}>
                    <div id={styles.card3} className={styles.cardhome}>
                  <img className={styles.card3img} src='./card3.png' alt='img'/>
                    <h2>Customized Software</h2>
                    <p>We specialize in creating customized software that precisely aligns with your unique business needs.</p>
                       
                  </div>
                    </div>
                </div>

                <Link href='/services'> <button className={styles.explorebutton}><p className={styles.expbuttonp}>Explore More<span id={styles.arrow}><MdArrowForward /></span></p></button></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Updiv
