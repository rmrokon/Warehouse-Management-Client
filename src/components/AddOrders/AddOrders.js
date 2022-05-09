import React, { useRef } from 'react';
import useProducts from '../../hooks/useProducts';

const AddOrders = () => {
    const [products] = useProducts();
    const formRef = useRef();

    const handleAddNewOrder = (e) => {
        e.preventDefault();
        const clientName = e.target.name.value;
        const productName = e.target.pname.value;
        const quantity = e.target.quantity.value;

        const order = { clientName, productName, quantity };

        fetch("https://imanage24.herokuapp.com/addorder", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                formRef.current.reset();
                console.log(data);
            })
    }
    return (
        <div className='my-5'>
            <h3 className='text-2xl text-center underline font-thin text-gray-800'>Fill up the form and add a new order!</h3>
            <div className='flex justify-center place-items-center my-5 w-full'>
                <form className='w-full text-center' onSubmit={handleAddNewOrder} ref={formRef}>
                    <input className='w-1/2 md:w-1/3 border-2 border-black rounded' type="text" name="name" placeholder='Client Name' required /> <br />
                    <select className='w-1/2 md:w-1/3 border-2 border-black rounded h-12 my-3' name="pname">
                        {
                            products.map(product => <option value={`${product.name}`} key={product._id}>{product.name}</option>)
                        }
                    </select><br />
                    <input className='w-1/2 md:w-1/3 border-2 border-black rounded' type="number" name="quantity" placeholder='Enter Quantity' required /> <br />
                    <input className='bg-gray-800 p-3 rounded-lg text-white mt-2 w-10/12 md:w-1/3' type="submit" value="+ Add Order" />
                </form>
            </div>
        </div>
    );
};

export default AddOrders;