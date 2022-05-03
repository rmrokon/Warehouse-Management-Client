import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDetail(productId);
    const { _id, name, img, description, supplier, price, quantity } = product;

    const handleDecreaseQuantity = (id) => {
        const { quantity, ...rest } = product;
        const previousQuantity = parseInt(quantity);
        const currentQuantity = previousQuantity - 1;
        const updatedProduct = { currentQuantity, ...rest }

        fetch(`http://localhost:5000/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }


    return (
        <div className='bg-red-400'>
            <div className='border-2 rounded-md bg-blue-300 w-6/12 mx-auto'>
                <img className='border-2 w-1/4 rounded-md mx-auto my-3' src={img} alt="" />
                <div className='p-3 text-center'>
                    <h3 className='font-bold mb-3'>{name}</h3>
                    <h4 className='mb-2'>Product Id: {_id}</h4>
                    <h4 className='font-bold mb-2'>Price: ${price}</h4>
                    <h4 className='mb-2 text-xl'>Stock Available: {quantity}</h4>
                    <button onClick={() => handleDecreaseQuantity(_id)} className='bg-green-400 p-1 rounded text-white'>Delivered</button>
                    <h4 className='mb-2'>Supplier: {supplier}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <Link to={'/manageInventory'}>
                    <button className='bg-pink-600 p-3 rounded-lg text-white mt-2'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;