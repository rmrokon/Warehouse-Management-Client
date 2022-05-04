import React from 'react';
import Logo from '../../images/imanage-logo.png'
import Links from '../Link/Links';

import './Header.css';

const Header = () => {
    return (
        <div className='shadow-md w-full sticky top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer'>
                    iManage
                </div>
                <div>
                    <Links></Links>
                </div>
            </div>
        </div>
    );
};

export default Header;