import React from 'react';
import Logo from '../../images/imanage-logo.png'
import NavBar from '../NavBar/NavBar';

import './Header.css';

const Header = () => {
    return (
        <div className='shadow-md w-full sticky top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer'>
                    iManage24
                </div>
                <div>
                    <NavBar></NavBar>
                </div>
            </div>
        </div>
    );
};

export default Header;