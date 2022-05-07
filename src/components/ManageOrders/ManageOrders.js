import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOrders from '../../hooks/useOrders';

const ManageOrders = () => {
    const [orders] = useOrders();
    const [delivered, setDelivered] = useState(false);

    const handleStatus = () => {
        setDelivered(!delivered);
    }
    return (
        <div className='md:mx-16'>
            <div className='flex justify-center md:justify-start'>
                <Link to={'/addNewOrder'}><button className='bg-pink-600 p-3 rounded-lg text-white mt-2'>+ Add New Order</button></Link>
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
                            <td className='text-center'><button onClick={() => handleStatus(order._id)} className='bg-pink-600 px-3 py-2 text-white rounded-lg' disabled={delivered}>{delivered ? "Delivered" : "Pending"}</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;