import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [productsByEmail, setProductsByEmail] = useState([]);

    useEffect(() => {
        const email = user?.email;
        const url = `https://imanage24.herokuapp.com/getProductsByEmail?email=${email}`;

        const getProductsByEmail = async () => {
            const { data } = await axios(url);
            if (data) {
                setProductsByEmail(data);
            }
        }
        getProductsByEmail();
    }, [user?.email])

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want delete the product?");
        if (confirmDelete) {
            fetch(`https://imanage24.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
            const remaining = productsByEmail.filter(product => product._id !== id);
            setProductsByEmail(remaining);
        }
    }
    return (
        <div>
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
                        productsByEmail.map(product => <tr key={product._id}>
                            <td>{product.name}</td>
                            <td className='text-center'>{product.price}</td>
                            <td className='text-center'>{product.quantity}</td>
                            <td className='text-center'>{product.supplier}</td>
                            <td className='text-center'><button onClick={() => handleDelete(product._id)} className='bg-gray-800 px-3 py-2 text-white rounded-lg'>X</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;