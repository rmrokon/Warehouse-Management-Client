import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [sendEmailVerification, errorVerification] = useSendEmailVerification(auth);
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
            await sendEmailVerification(email);
            toast("Check your mail to verify your account");
            if (user) {
                user.displayName = name;
            }
            formRef.current.reset();
        }
    }

    if (loading || loadingGoogle) {
        return <Spinner></Spinner>
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if (user || userGoogle) {
        navigate('/home');
    }
    return (
        <div className='my-5'>
            <h3 className='text-2xl text-center underline font-thin text-gray-800'>Register</h3>
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
                    {errorGoogle && <p>{errorGoogle.message}</p>}
                    {errorVerification && <p>{errorVerification.message}</p>}
                    <input className='bg-gray-800 p-3 rounded-lg text-white mt-2' type="submit" value="Register" disabled={!agree} />
                </form>
            </div>

            {/* Social Login Section */}
            <div className='or-section'>
                <div className='line-div' />
                <span className='or'>Or</span>
                <div className='line-div' />
            </div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleSignIn} className='bg-gray-800 p-3 rounded-lg text-white mt-2 w-1/3'>Sign in With Google</button>
            </div>
        </div>
    );
};

export default Register;