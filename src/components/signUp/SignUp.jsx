import React from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignUp = () => {
    return (
        <div className='container'>
            <div className='signUpBox'>

                <div className='title'> Sign Up </div>

                <div className='input-box'>
                    <div className='tag'>Email</div>
                    <input className='input' type="email" name="email" required />
                </div>

                <div className='input-box'>
                    <div className='tag'>Password</div>
                    <input className='input' type="password" name="password" required />
                </div>

                <div className='input-box'>
                    <div className='tag'>Confirm Password</div>
                    <input className='input' type="password" name="password" required />
                </div>

                <div>
                    <button className="btn-sign-up">Sign-up</button>
                </div>

                <div>
                    Already have an account ? <Link className='login-txt' to="/login">Login</Link>
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

export default SignUp;