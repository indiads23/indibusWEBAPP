'use client'
import React from 'react'
import "./adminoption.css"
import { useRouter } from 'next/navigation'
const AdminOptions = () => {
    const router = useRouter()
    const contactus = () => {
        router.push("/dataTable")
    }
    return (
        <div className='adminoptionBody'>
            <div className='optionCard'>
                <h1> Explore Your Website </h1>
                <div className='optionsButton'>
                    <button onClick={contactus} className='butttonComp'> Contact Us Intractions </button>
                    <button className='butttonComp'> Coming Soon </button>
                </div>
            </div> 
        </div>
    )
}

export default AdminOptions
