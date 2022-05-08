import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Footer.css';

const Footer = () => {
    const [user] = useAuthState(auth);
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className='bg-gray-800 p-10 text-gray-200'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
                        <div className="mb-5">
                            <ul>
                                <li><Link to={'/home'}>Home</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/aboutus'}>About Us</Link></li>
                                {
                                    user && <li><Link to={'/manageOrders'}>Manage Order</Link></li>
                                }
                                {
                                    user && <li><Link to={'/manageInventory'}>Manage Inventory</Link></li>
                                }
                                {
                                    user && <li><Link to={'/myItems'}>My Items</Link></li>
                                }

                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4>Address:</h4>
                            173/3, Dhanmondi <br />
                            Dhaka-1207 <br />
                            <strong>Phone:</strong>+88017727272 <br />
                            <strong>E-mail:</strong> info@imanage24.com

                        </div>
                    </div>
                    <p className='text-center'><small>copyright @ {year} </small></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;