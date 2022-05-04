import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Link.css';

const Link = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
    }
    return (
        <nav className='flex justify-center my-auto'>
            <NavLink to={'/home'}>Home</NavLink>
            {user && <NavLink to={'/inventory'}>Inventory</NavLink>}
            {user && <NavLink to={'/manageInventory'}>Manage Inventory</NavLink>}
            {user ? <NavLink to={'/home'} onClick={logout}>Logout</NavLink> : <NavLink to={'/Login'}>Login</NavLink>}
            {!user && <NavLink to={'/register'}>Register</NavLink>}
        </nav>
    );
};

export default Link;