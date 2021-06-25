import React from 'react';
import '../styles/login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialCenter</h3>
                        <span className="loginDesc">Connect with people from all around the world!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input Placeholder="Email" className="loginInput" />
                        <input Placeholder="Password" type='password' className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create an account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
