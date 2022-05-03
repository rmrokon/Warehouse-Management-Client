import React from 'react';
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
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <h3 className='text-2xl text-center my-5'>Total Product: {products.length}</h3>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Supplier</th>
                    <th>Delete</th>
                </tr>
                {
                    products.map(product => <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.supplier}</td>
                        <td className='text-center'><button onClick={() => handleDelete(product._id)} className='bg-red-600 px-3 py-2 text-white rounded-lg'>X</button></td>
                    </tr>
                    )
                }
            </table>
        </div>
    );
};

export default ManageInventory;