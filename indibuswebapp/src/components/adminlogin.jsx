'use client'
import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import "./css/login.css"

const AdminloginComp = () => {
    const router = useRouter()
    const form = useRef()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [error,setError] = useState("")

    const login = async (e) => {
        e.preventDefault()
        try {
            console.log(loginData);
            const response = await axios.post("https://indibus.net/api/user/adminlogin", loginData)
            console.log(response.data);
            setError(response.message)
            router.push("/adminoptions")
        } catch (error) {
            console.log(error);
            setError(error.message)
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
                <h2 className="login-title">Sign in to your account</h2>
                <form className="login-form" onSubmit={login} ref={form}>
                    <div className="login-input-group">
                        <div className="login-input-container">
                            <label htmlFor="email" className="login-label">Email address</label>
                            <input className="login-input" type="email" placeholder="Email" id="email" required onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                        </div>
                        <div className="login-input-container">
                            <label htmlFor="password" className="login-label">Password</label>
                            <input className="login-input" type="password" placeholder="Password" id="password" required onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                        </div>
                        <div className="login-button-container">
                            <button type="submit" className="login-submit-button">Sign in</button>
                        </div>
                    </div>

                </form>
                <p className="login-subtitle">
                    {error}
                </p>
                <p className="login-subtitle">
                    Forgot your Password?&nbsp;
                    <a href="/forgotpass" className="login-signup-link">
                        Forgot Password
                    </a>
                </p>
            </div>
        </div>
    )
}

export default AdminloginComp
