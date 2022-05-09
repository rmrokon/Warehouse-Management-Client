import axios from 'axios';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        errorEmailSignIn,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, errorPassReset] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        setEmail(e.target.email.value);
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post("https://imanage24.herokuapp.com/login", { email })
        localStorage.setItem('accessToken', data.accessToken)

    }

    if (loading || loadingGoogle) {
        return <Spinner></Spinner>;
    }

    if (user || userGoogle) {
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
        if (!errorGoogle) {
            navigate(from, { replace: true });
        }
    }

    const handleForgotPass = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent");
        }
    }

    return (
        <div className='my-5'>
            <h3 className='text-2xl text-center underline font-thin text-gray-800'>Login</h3>
            <div className='flex justify-center place-items-center my-5'>
                <form className='w-full text-center' onSubmit={handleLogin}>
                    <input className='' type="email" name="email" placeholder='Enter Email' onBlur={(e) => setEmail(e.target.value)} /> <br />
                    <input className='' type="password" name="password" placeholder='Enter Password' /> <br />
                    <p>New to imanage? <Link className='text-blue-600' to={'/register'}>Create New Account</Link></p>
                    <p className='text-blue-600 cursor-pointer' onClick={handleForgotPass}>Forgot Password?</p>
                    {errorEmailSignIn && <p className='text-red-400'>{errorEmailSignIn.message}</p>}
                    {errorGoogle && <p className='text-red-400'>{errorGoogle.message}</p>}
                    {errorPassReset && <p className='text-red-400'>{errorPassReset.message}</p>}
                    <input className='bg-gray-800 p-3 rounded-lg text-white mt-2' type="submit" value="Login" />
                </form>

            </div>
            <div className='or-section'>
                <div className='line-div' />
                <span className='or'>Or</span>
                <div className='line-div' />
            </div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleSignIn} className='bg-gray-800 p-3 rounded-lg text-white mt-2 md:w-1/3'>Sign in With Google</button>
            </div>
        </div>
    );
};

export default Login;