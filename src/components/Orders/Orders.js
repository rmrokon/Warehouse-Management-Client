import React from 'react';
import { Link } from 'react-router-dom';
import useOrders from '../../hooks/useOrders';
import './Orders.css';

const Orders = () => {
    const [orders] = useOrders();
    return (
        <div className='md:mx-16'>
            <h3 className='text-3xl text-center my-2 '>Orders</h3>
            <h3 className='text-2xl text-center'>Total Orders:{orders.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>
                            Client Name
                        </th>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Quantity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>{order.clientName}</td>
                            <td>{order.productName}</td>
                            <td>{order.quantity}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className='flex justify-center'>
                <Link to={'/manageOrders'}>
                    <button className='bg-pink-600 p-3 rounded-lg text-white mt-2'>Manage Orders</button>
                </Link>
            </div>

        </div>
    );
};

export default Orders;