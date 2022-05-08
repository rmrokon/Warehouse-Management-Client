import { XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOrders from '../../hooks/useOrders';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useOrders();

    const handleDelete = (id) => {
        fetch(`https://imanage24.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
        const remaining = orders.filter(order => order._id !== id);
        setOrders(remaining);
    }


    return (
        <div className='md:mx-16'>
            <div className='flex justify-center md:justify-start'>
                <Link to={'/addNewOrder'}><button className='bg-gray-800 p-3 rounded-lg text-white mt-2'>+ Add New Order</button></Link>
            </div>
            <h3 className='text-2xl text-center my-5'>Total Orders: {orders.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td className='text-center'>{order.clientName}</td>
                            <td className='text-center'>{order.productName}</td>
                            <td className='text-center'>{order.quantity}</td>
                            <td className='text-center'><button onClick={() => handleDelete(order._id)} className='bg-gray-800 px-3 py-2 text-white rounded-lg'><XIcon className='w-6 h-6'></XIcon></button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;