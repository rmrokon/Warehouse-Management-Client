import { useNavigate } from 'react-router-dom';
import React from 'react';

const SingleProduct = ({ _id, name, img, description, supplier, price, quantity }) => {
    const navigate = useNavigate();

    const navigateToProductDetails = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='border-2 rounded-md'>
            <img className='border-2 w-1/2 rounded-md mx-auto my-3' src={img} alt="" />
            <div className='p-3'>
                <h3 className='font-bold mb-3'>{name}</h3>
                <h4 className='font-bold mb-2'>${price}</h4>
                <h4 className='mb-2'>Stock Available: {quantity}</h4>
                <h4 className='mb-2'>Supplier: {supplier}</h4>
                <p>{description.slice(0, 100)} <span title={description}>...</span></p>
                <button onClick={() => navigateToProductDetails(_id)} className='bg-gray-800 p-3 rounded-lg text-white mt-2'>Update</button>
            </div>

        </div>
    );
};

export default SingleProduct;