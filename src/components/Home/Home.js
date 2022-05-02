import React from 'react';
import useProducts from '../../hooks/useProducts';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Footer></Footer>
        </div>
    );
};

export default Home;