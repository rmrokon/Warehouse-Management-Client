import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        navigate('/home');
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if (user || userGoogle) {
        navigate('/home');
    }
    return (
        <div>
            <h3 className='text-2xl text-center underline font-thin text-pink-600'>Login</h3>
            <div className='flex justify-center place-items-center my-5'>
                <form className='w-full text-center' onSubmit={handleLogin}>
                    <input className='' type="email" name="email" placeholder='Enter Email' /> <br />
                    <input className='' type="password" name="password" placeholder='Enter Password' /> <br />
                    <p>New to imanage? <Link className='text-blue-600' to={'/register'}>Create New Account</Link></p>
                    {error && <p>{error.message}</p>}
                    <input className='bg-pink-600 p-3 rounded-lg text-white mt-2' type="submit" value="Login" />
                </form>

            </div>
            <div className='or-section'>
                <div className='line-div' />
                <span className='or'>Or</span>
                <div className='line-div' />
            </div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleSignIn} className='bg-pink-600 p-3 rounded-lg text-white mt-2 md:w-1/3'>Sign in With Google</button>
            </div>
        </div>
    );
};

export default Login;