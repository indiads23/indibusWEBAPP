'use client'
import React,{useState,useRef} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const AdminloginComp = () => {
    const router = useRouter()
    const form = useRef()
    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    const login =async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post("/api/user/adminlogin",loginData,{
                timeout:10000
            })
            console.log(response.data);
            router.push("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Admin Login</h1>
            <form onSubmit={login} ref={form} >
                <input type="text" placeholder='Email' onChange={(e)=>setLoginData({...login,email:e.target.value})}/>
                <input type="text" placeholder='Password' onChange={(e)=>setLoginData({...login,password:e.target.value})}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default AdminloginComp
