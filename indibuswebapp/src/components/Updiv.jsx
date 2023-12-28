'use client'
import React from 'react'
import Corousel from '@/components/Corousel'
import styles from "../app/page.module.css"


const Updiv = () => {
  return (
    
    <div>
        <div className={styles.container}>
            <div className={styles.coro}>
                <Corousel/> 
            </div>
            <div className={styles.smallcontainer}>
                <h2 className={styles.h2text} >Our Exited Services Offerings</h2>
                <div className={styles.row}>
                    <div className={styles.col3}>
                        <div className={styles.imgdiv3} style={{backgroundImage:'url(./block1.png)'}}>
                            <p className={styles.imgp} >InDi <span style={{color: "#13ee2c"}}>Ads</span></p>
                            <p className={styles.imgp2} >InDiAds is a creative content 
                                producing and advertising 
                                company that is part of 
                                INDIBUS. We specialize 
                                in creating </p>
                        </div>
                    </div>
                    <div className={styles.col3} style={{backgroundImage:'url(./block2.png)'}} >
                        <div  className={styles.imgdiv3}>
                            <p className={styles.imgp} >InDi <span style={{color: "#13ee2c"}}>Learn</span></p>
                            <p className={styles.imgp2} >InDiLearn is an education 
                                based startup that is part of 
                                INDIBUS We focus on 
                                developing</p>
                        </div>
                    </div>
                    <div className={styles.col3} style={{backgroundImage:'url(./block3.png)'}}>
                        <div className={styles.imgdiv3}>
                            <p className={styles.imgp} >InDi <span style={{color: "#13ee2c"}}>Collab</span></p>
                            <p className={styles.imgp2} >You have also an option to do 
                                collaboration with InDiBus 
                                which is the best platform 
                                to make</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Updiv
