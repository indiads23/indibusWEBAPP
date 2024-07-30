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

    const login = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/user/adminlogin", loginData, {
                timeout: 10000
            })
            console.log(response.data);
            router.push("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div class="login-container">
            <div class="login-card">
                <div class="login-logo-container">
                    <span class="login-logo">
                        <img src="/favicon.ico" alt="Logo" />
                    </span>
                </div>
                <h2 class="login-title">Sign in to your account</h2>
                <form class="login-form" onSubmit={login} ref={form}>
                    <div class="login-input-group">
                        <div class="login-input-container">
                            <label for="email" class="login-label">Email address</label>
                            <input class="login-input" type="email" placeholder="Email" id="email" required onChange={(e) => setLoginData({ ...login, email: e.target.value })} />
                        </div>
                        <div class="login-input-container">
                            <label for="password" class="login-label">Password</label>
                            <input class="login-input" type="password" placeholder="Password" id="password" required onChange={(e) => setLoginData({ ...login, password: e.target.value })} />
                        </div>
                        <div class="login-button-container">
                            <button type="submit" class="login-submit-button">Sign in</button>
                        </div>
                    </div>
                </form>
                <p class="login-subtitle">
                    Forgot your Password?&nbsp;
                    <a href="/forgotpass" class="login-signup-link">
                        Forgot Password
                    </a>
                </p>
            </div>
        </div>
    )
}

export default AdminloginComp
