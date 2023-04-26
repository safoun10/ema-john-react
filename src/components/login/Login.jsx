import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className='signUpBox'>

                <div className='title'> Login </div>

                <div className='input-box'>
                    <div className='tag'>Email</div>
                    <input className='input' type="email" name="email" required />
                </div>

                <div className='input-box'>
                    <div className='tag'>Password</div>
                    <input className='input' type="password" name="password" required />
                </div>

                <div>
                    <button className="btn-sign-up">Login</button>
                </div>

                <div>
                    New to Ema-John ? <Link className='login-txt' to="/sign-up">Sign Up</Link>
                </div>

                <div className='trick'>
                    <div><hr className='hr' /></div>
                    <div>or</div>
                    <div><hr className='hr' /></div>
                </div>

                <div>
                    <button className='g-btn'>
                        <img src="../../../src/images/google.svg" className='g-img' />
                        Continue with Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;