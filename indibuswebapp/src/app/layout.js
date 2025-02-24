import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'INDIBUS Software Solutions PVT LTD',
  description: 'Official Indibus webapp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      

      <body className={inter.className}>
        <Navbar/>
          <div>
            {children}
          </div> 
        <Footer/>
      </body>
    
    </html>
  )
}
