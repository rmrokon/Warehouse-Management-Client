import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageInventory = () => {
    const [products] = useProducts();
    return (
        <div>
            <h3>This is manage inventory page: {products.length}</h3>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Supplier</th>
                </tr>
                {
                    products.map(product => <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.supplier}</td>
                        <td><button className='bg-red-600 px-5 py-2 text-white rounded-lg'>X</button></td>
                    </tr>
                    )
                }
            </table>
        </div>
    );
};

export default ManageInventory;