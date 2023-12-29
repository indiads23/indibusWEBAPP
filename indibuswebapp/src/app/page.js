'use client'
import Updiv from '@/components/Updiv'
import Middiv from '@/components/Middiv'
import styles from './page.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration:1200,
      once:false
    },[])
  })
  return (
    <main className={styles.main}>
      <Updiv/>
      <Middiv/>
    </main>
  )
}
