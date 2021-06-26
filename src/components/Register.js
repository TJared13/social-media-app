import React from 'react';
import '../styles/register.css';

export default function Register() {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">SocialCenter</h3>
                        <span className="registerDesc">Connect with people from all around the world!</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input Placeholder="Username" className="registerInput" />
                        <input Placeholder="Email" className="registerInput" />
                        <input Placeholder="Password" type='password' className="registerInput" />
                        <input Placeholder="Re-type Password" type='password' className="registerInput" />
                        <button className="registerButton">Sign Up</button>
                        <button className="registerRegisterButton">register to your account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
