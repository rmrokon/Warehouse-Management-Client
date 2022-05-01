import React from 'react';
import Logo from '../../images/imanage-logo.png'
import Link from '../Link/Link';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='flex flex-row justify-around p-5'>

                <div className='basis-1/4'>
                    <img className='logo' src={Logo} alt="" />
                </div>

                <div className='basis-1/4'>
                    <Link></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;