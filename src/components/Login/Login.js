import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h3 className='text-2xl text-center underline font-thin text-pink-600'>Login</h3>
            <div className='flex justify-center place-items-center my-5'>
                <form className='w-full text-center'>
                    <input className='' type="email" name="email" placeholder='Enter Email' /> <br />
                    <input className='' type="password" name="password" placeholder='Enter Password' /> <br />
                    <p>New to imanage? <Link className='text-blue-600' to={'/register'}>Create New Account</Link></p>
                    <input className='bg-pink-600 p-3 rounded-lg text-white mt-2' type="submit" value="Login" />
                </form>

            </div>
            <div className='or-section'>
                <div className='line-div' />
                <span className='or'>Or</span>
                <div className='line-div' />
            </div>
            <div className='flex justify-center'>
                <button className='bg-pink-600 p-3 rounded-lg text-white mt-2 w-1/3'>Sign in With Google</button>
            </div>
        </div>
    );
};

export default Login;