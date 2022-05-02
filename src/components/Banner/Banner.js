import React from 'react';
import BannerImg from '../../images/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner flex justify-center place-items-end'>
            <h3 className='text-5xl text-white font-mono mb-20'>Manage your Inventory in the most efficient way!!</h3>
        </div>
    );
};

export default Banner;