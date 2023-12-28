import Updiv from '@/components/Updiv'
import Middiv from '@/components/Middiv'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Updiv/>
      <Middiv/>
    </main>
  )
}
