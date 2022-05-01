import React from 'react';

const SingleProduct = ({ name, img, description, supplier, price, quantity }) => {
    return (
        <div className='border-2'>
            <img className='border-2 w-1/2' src={img} alt="" />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <h4>Stock Available: {quantity}</h4>
            <h4>Supplier: {supplier}</h4>
            <p>{description}</p>
        </div>
    );
};

export default SingleProduct;