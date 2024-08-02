'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React,{useState,useRef} from 'react'
import "./css/login.css"
const ChangePasswordComp = () => {
    const form = useRef()
    const router = useRouter()
    const [changePasswordData,setChangePasswordData] = useState({
        oldPassword:"",
        newPassword:""
    })

    const changePassword = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post("https://indibus.net/api/user/changepassword",changePasswordData)
            router.push("/")
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="login-container">
      <div className="login-card">
      <div className="login-logo-container">
        <span className="login-logo">
          <img src="/favicon.ico" alt="Logo" />
        </span>
      </div>
      <h1 className="login-title" >Change Password</h1>
      <form className="login-form"  ref={form} onSubmit={changePassword}>
        <div className="login-input-group">
        <div className="login-input-container">
            <label htmlFor="oldPassword" className="login-label">Old Password</label>
            <input className="login-input" type="text" placeholder='Old Password' onChange={(e)=>setChangePasswordData({...changePasswordData,oldPassword:e.target.value})}/>
        </div>
        <div className="login-input-container">
            <label htmlFor="newPassword" className="login-label">New Password</label>
            <input className="login-input"  type="text" placeholder='New Password' onChange={(e)=>setChangePasswordData({...changePasswordData,newPassword:e.target.value})}/>
        </div>
        <div className="login-button-container">
            <button className="login-submit-button" type='submit'>Submit</button>
        </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default ChangePasswordComp
