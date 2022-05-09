import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDetail(productId);
    const { _id, name, img, description, supplier, price, quantity } = product;
    const formRef = useRef();


    const handleDecreaseQuantity = (id) => {
        const { quantity, ...rest } = product;
        const previousQuantity = parseInt(quantity);
        const currentQuantity = previousQuantity - 1;
        const updatedProduct = { currentQuantity, ...rest }

        fetch(`https://imanage24.herokuapp.com/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {

            })

        setProduct(updatedProduct);

    }

    const handleUpdateQuantity = (e) => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        const { quantity, ...rest } = product;
        const previousQuantity = parseInt(quantity);
        const currentQuantity = previousQuantity + parseInt(inputQuantity);
        const updatedProduct = { currentQuantity, ...rest }

        fetch(`https://imanage24.herokuapp.com/updateProduct/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                formRef.current.reset();
            })
    }


    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='border-2 rounded-md w-2/3 mx-auto'>
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
                <div className='flex justify-center place-items-center my-5'>
                    <form className='w-full text-center' onSubmit={handleUpdateQuantity} ref={formRef}>
                        <input className='border w-2/3 rounded-md text-center h-16' type="number" name="quantity" placeholder='Enter Quantity' /> <br />
                        <input className='bg-gray-800 p-3 rounded-lg text-white mt-2' type="submit" value="Update Quantity" />
                    </form>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <Link to={'/manageInventory'}>
                    <button className='bg-gray-800 p-3 rounded-lg text-white mt-2'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;