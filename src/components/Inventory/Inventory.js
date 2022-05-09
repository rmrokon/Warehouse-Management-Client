import { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import SingleProduct from '../SingleProducts/SingleProduct';
import Spinner from '../Spinner/Spinner';

const Inventory = () => {
    const [products] = useProducts();


    // if (reload) {
    //     return <Spinner></Spinner>
    // }
    // if (products) {
    //     console.log(reload);
    //     setReload(!reload);
    // }


    return (
        <div className='my-10'>
            <h3 className='text-center text-3xl font-bold text-gray-600'>Items in Inventory</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
                {
                    products.slice(0, 6).map(product => <SingleProduct key={product._id} {...product}></SingleProduct>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={'/manageInventory'}>
                    <button className='bg-gray-800 p-3 rounded-lg text-white mt-2'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;