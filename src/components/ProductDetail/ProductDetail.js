import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const { _id, name, img, description, supplier, price, quantity } = product;
    const [newQuantity, setNewQuantity] = useState(quantity)

    // We have to make this route a protected route



    const handleDecreaseQuantity = () => {

    }

    return (
        <div>
            <div className='border-2 rounded-md'>
                <img className='border-2 w-1/4 rounded-md mx-auto my-3' src={img} alt="" />
                <div className='p-3 text-center'>
                    <h3 className='font-bold mb-3'>{name}</h3>
                    <h4 className='mb-2'>Product Id: {_id}</h4>
                    <h4 className='font-bold mb-2'>Price: ${price}</h4>
                    <h4 className='mb-2 text-xl'>Stock Available: {quantity}</h4>
                    <button onClick={handleDecreaseQuantity} className='bg-green-400 p-1 rounded text-white'>Delivered</button>
                    <h4 className='mb-2'>Supplier: {supplier}</h4>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;