import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }


    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message));
    };



    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo'
                    src='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/47b3e768-994e-4c15-a2fb-6a6fd43547bd.png' />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>

                    <button type='submit' onClick={signIn}
                        className='login_signInButton'>Sign In</button>
                </form>

                <p> By signing-in you agree to the Terms & Conditions of ShopIt.Com</p>
                <button onClick={register} className='login_registerButton'>Create your ShopIt account</button>
            </div>
        </div>
    )
}

export default Login
