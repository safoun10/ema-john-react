import React, { useContext } from 'react';
import "./Login.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email , password)
        .then((res) => {
            toast.success("You have Successfully logged in to our platform !!");
            form.reset();
            navigate(from , {replace : true});
        })
        .catch((err) => {
            toast.error(err.message);
        })
    }

    return (
        <div className='container'>
            <form className='signUpBox' onSubmit={handleLogin}>

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
                    <button className="btn-sign-up" type='submit' >Login</button>
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
                    <button className='g-btn' type='button'>
                        <img src="../../../src/images/google.svg" className='g-img' />
                        Continue with Google
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Login;