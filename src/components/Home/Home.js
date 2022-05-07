import React from 'react';
import Banner from '../Banner/Banner';
import Charts from '../Charts/Charts';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import Orders from '../Orders/Orders';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Orders></Orders>
            <Charts></Charts>
            <Footer></Footer>
        </div>
    );
};

export default Home;