"use client"

import React from 'react'
import "../components/css/signup.css"

export default function Signup() {
    return (
        <div class="signup-container">
            <div class="signup-card">
                <div class="signup-logo-container">
                    <span class="signup-logo">
                        <img src="/favicon.ico" alt="Logo" />
                    </span>
                </div>
                <h2 class="signup-title">Sign up to create account</h2>
                <p class="signup-subtitle">
                    Already have an account?&nbsp;
                    <a href="/adminlogin" class="signup-login-link">
                        Log In
                    </a>
                </p>

                <form class="signup-form">
                    <div class="signup-input-group">
                        <div class="signup-input-container">
                            <label for="name" class="signup-label">Full Name</label>
                            <input class="signup-input" type="text" placeholder="Full Name" id="name" required />
                        </div>
                        <div class="signup-input-container">
                            <label for="email" class="signup-label">Email address</label>
                            <input class="signup-input" type="email" placeholder="Email" id="email" required />
                        </div>
                        <div class="signup-input-container">
                            <label for="password" class="signup-label">Password</label>
                            <input class="signup-input" type="password" placeholder="Password" id="password" required />
                        </div>
                        <div class="signup-button-container">
                            <button type="submit" class="signup-submit-button">Create Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
