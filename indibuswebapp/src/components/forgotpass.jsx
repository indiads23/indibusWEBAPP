"use client"
import React, { useState } from 'react';
import "../components/css/signup.css"

export default function Forgotpass() {
    const [showResetPassword, setShowResetPassword] = useState(false);

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        setShowResetPassword(true);
    };

    return (
        <div className="signup-container">
            {!showResetPassword ? (
                <div className="signup-card">
                    <h2 className="signup-title">Forgot Password</h2>
                    <form className="signup-form">
                        <div className="signup-input-group">
                            <div className="signup-input-container">
                                <label htmlFor="username" className="signup-label">Email</label>
                                <input className="signup-input" type="text" placeholder="Enter emain" id="username" required />
                            </div>
                            <div className="signup-button-container">
                                <button onClick={handleForgotPasswordClick} className="signup-submit-button">Forgot Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="signup-card">
                    <h2 className="signup-title">Reset Password</h2>
                    <form className="signup-form">
                        <div className="signup-input-group">
                            <div className="signup-input-container">
                                <label htmlFor="password" className="signup-label">Password</label>
                                <input className="signup-input" type="password" placeholder="Enter Password" id="password" required />
                            </div>
                            <div className="signup-input-container">
                                <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
                                <input className="signup-input" type="password" placeholder="Enter Password" id="confirm-password" required />
                            </div>
                            <div className="signup-button-container">
                                <button type="submit" className="signup-submit-button">Reset Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
