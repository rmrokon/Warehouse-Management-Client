import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';

const Link = () => {
    return (
        <nav className='flex justify-center my-auto'>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/inventory'}>Inventory</NavLink>
            <NavLink to={'/manageInventory'}>Manage Inventory</NavLink>
            <NavLink to={'/Login'}>Login</NavLink>
        </nav>
    );
};

export default Link;