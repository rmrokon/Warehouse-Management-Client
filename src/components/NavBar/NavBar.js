import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink as Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './NavBar.css';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const NavBar = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false)

    const logout = () => {
        signOut(auth)
    }
    return (
        <div>
            <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
                {open ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6'></MenuIcon>}
            </div>
            <ul className={`md:flex md:items-center md:py-0 py-7 md:static absolute bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${open ? 'top-10' : 'top-[-490px]'}`}>
                <li><Link to={'/home'}>Home</Link></li>

                <li><Link to={'/blog'}>Blog</Link></li>

                <li>{user && <Link to={'/manageInventory'}>Manage Inventory</Link>}</li>

                <li>{user && <Link to={'/manageOrders'}>Manage Orders</Link>}</li>

                <li>{user && <Link to={'/myItems'}>My Items</Link>}</li>

                <li>{!user && <Link to={'/register'}>Register</Link>}</li>

                <li>{user ? <Link to={'/login'} onClick={logout}>Logout</Link> : <Link to={'/Login'}>Login</Link>}</li>

            </ul>
        </div>
    );
};

export default NavBar;