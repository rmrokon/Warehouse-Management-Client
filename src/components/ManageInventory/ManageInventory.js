import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './ManageInventory.css';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want delete the product?");
        if (confirmDelete) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining);
        }
    }
    return (
        <div className='md:mx-16'>
            <div className='flex justify-center md:justify-start'>
                <Link to={'/addnewitem'}><button className='bg-pink-600 p-3 rounded-lg text-white mt-2'>+ Add New Item</button></Link>
            </div>
            <h3 className='text-2xl text-center my-5'>Total Product: {products.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <td>{product.name}</td>
                            <td className='text-center'>{product.price}</td>
                            <td className='text-center'>{product.quantity}</td>
                            <td className='text-center'>{product.supplier}</td>
                            <td className='text-center'><button onClick={() => handleDelete(product._id)} className='bg-pink-600 px-3 py-2 text-white rounded-lg'>X</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;