import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

import './Header.css';

const Header = () => {
    return (
        <div className='shadow-md w-full sticky top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='cursor-pointer font-mono'>
                    <Link className='bg-gray-800 text-white px-3 py-2 rounded-full font-bold text-2xl' to={'/home'}>iManage24</Link>
                </div>
                <div>
                    <NavBar></NavBar>
                </div>
            </div>
        </div>
    );
};

export default Header;