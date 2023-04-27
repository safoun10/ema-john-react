import React, { useContext, useState } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {


        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            toast.warning("Your confirmation password didn't match 🥲");
            return;
        }
        else if(password.length < 8){
            toast.error("SECURITY ALERT ⚠️⚠️⚠️");
            toast.warning("Your password must be 8 characters or more 🙂");
            return;
        }

        createUser(email , password)
        .then((res) => {
            const loggedUser = res.user;
            toast.success("Thanks for creating an account and welcome in our Ema-John family 😀😀")
            form.reset();
        })
        .catch((err) => {
            toast.error(err.message);
        })
    }

    const handleGoogleSignUp = () => {
        toast("blah blah blah")
    }


    return (
        <div className='container'>
            <form className='signUpBox' onSubmit={handleSubmit}>

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
                    <input className='input' type="password" name="confirm" required />
                </div>

                <div>
                    <button className="btn-sign-up" type='submit'>Sign-up</button>
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
                    <button className='g-btn' type='button' onClick={handleGoogleSignUp}>
                        <img src="../../../src/images/google.svg" className='g-img' />
                        Continue with Google
                    </button>
                </div>

            </form>
        </div>
    );
};

export default SignUp;