'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React,{useState,useRef} from 'react'

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
            const response = await axios.post("/api/user/changepassword",changePasswordData,{
                timeout:10000
            })
            router.push("/")
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <h1 >Change Password</h1>
      <form ref={form} onSubmit={changePassword}>
            <input type="text" placeholder='Old Password' onChange={(e)=>setChangePasswordData({...changePasswordData,oldPassword:e.target.value})}/>
            <input type="text" placeholder='New Password' onChange={(e)=>setChangePasswordData({...changePasswordData,newPassword:e.target.value})}/>
            <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ChangePasswordComp
