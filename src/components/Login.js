import React, { useRef } from 'react';
import '../styles/login.css'

export default function Login() {
    const email = useRef();
    const password = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value)
    };

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialCenter</h3>
                        <span className="loginDesc">Connect with people from all around the world!</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type='email' className="loginInput" required ref={email} />
                        <input placeholder="Password" type='password' required minLength='6' className="loginInput" ref={password} />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create an account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
