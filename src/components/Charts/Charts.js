import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useOrders from '../../hooks/useOrders';
import useProducts from '../../hooks/useProducts';
import './Charts.css';

const Charts = () => {
    const [products] = useProducts();
    const [orders] = useOrders();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-5'>

            <div className='chart-container'>
                <h3 className='text-xl text-pink-600 text-center'>Quantity Vs Price</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={products}
                        stackOffset="sign"
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        isAnimationActive={true}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="quantity" fill="#8884d8" stackId="stack" />
                        <Bar dataKey="price" fill="#82ca9d" stackId="stack" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='chart-container my-10'>
                <h3 className='text-xl text-pink-600 text-center'>Orders</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={orders}
                        stackOffset="sign"
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        isAnimationActive={true}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="productName" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="quantity" fill="#8884d8" stackId="stack" />
                    </BarChart>
                </ResponsiveContainer>
            </div>


        </div>
    );
};

export default Charts;