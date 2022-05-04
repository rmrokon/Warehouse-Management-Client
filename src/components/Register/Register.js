import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const formRef = useRef();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            if (user) {
                user.displayName = name;
            }
            formRef.current.reset();
        }

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if (user || userGoogle) {
        navigate('/home');
    }
    return (
        <div className='mb-5'>
            <h3 className='text-2xl text-center underline font-thin text-pink-600'>Register</h3>
            <div className='my-5'>
                <form className='w-full flex flex-col place-items-center' onSubmit={handleRegister} ref={formRef}>
                    <input className='' type="text" name="name" placeholder='Enter Name' />
                    <input className='' type="email" name="email" placeholder='Enter Email' />
                    <input className='' type="password" name="password" placeholder='Enter Password' />
                    <input className='' type="password" name="confirmPassword" placeholder='Confirm Password' />
                    <div className='w-1/3 flex flex-auto place-items-center'>
                        <input className='mr-2' onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={` ${agree ? '' : 'text-red-400'}`} htmlFor="terms">Accept imanage Terms and Conditions</label>
                    </div>
                    <p>Alreade have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></p>
                    {error && <p>{error.message}</p>}
                    <input className='bg-pink-600 p-3 rounded-lg text-white mt-2' type="submit" value="Register" disabled={!agree} />
                </form>
            </div>

            {/* Social Login Section */}
            <div className='or-section'>
                <div className='line-div' />
                <span className='or'>Or</span>
                <div className='line-div' />
            </div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleSignIn} className='bg-pink-600 p-3 rounded-lg text-white mt-2 w-1/3'>Sign in With Google</button>
            </div>
        </div>
    );
};

export default Register;