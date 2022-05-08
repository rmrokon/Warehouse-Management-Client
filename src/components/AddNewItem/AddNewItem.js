import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddNewItem.css';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const formRef = useRef();

    const handleAddNewItem = (e) => {
        e.preventDefault();
        const email = user.email;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.stock.value;
        const supplier = e.target.supplier.value;
        const img = e.target.image.value;
        const description = e.target.description.value;

        const newProduct = { name, email, price, quantity, supplier, img, description };

        fetch("https://imanage24.herokuapp.com/addnewproduct", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                formRef.current.reset();
                toast("Product Added!")
            })
    }
    return (
        <div>
            <h3 className='text-2xl text-center underline font-thin text-pink-600'>Fill up the form to add new product!</h3>
            <div className='flex justify-center place-items-center my-5 w-full'>
                <form className='w-full text-center' onSubmit={handleAddNewItem} ref={formRef}>
                    <input className='w-1/2 md:w-1/3' type="email" name="email" placeholder='User Email' value={user.email} /> <br />
                    <input className='w-1/2 md:w-1/3' type="text" name="name" placeholder='Product Name' /> <br />
                    <input className='w-1/2 md:w-1/3' type="number" name="price" placeholder='Price in USD' /> <br />
                    <input className='w-1/2 md:w-1/3' type="number" name="stock" placeholder='Stock Available' /> <br />
                    <input className='w-1/2 md:w-1/3' type="text" name="supplier" placeholder='Supplier Name' /> <br />
                    <input className='w-1/2 md:w-1/3' type="text" name="image" placeholder='Image Link' /> <br />
                    <textarea className='w-1/2 md:w-1/3' name="description" placeholder='Description'></textarea> <br />
                    <input className='bg-gray-800 p-3 rounded-lg text-white mt-2 w-10/12 md:w-1/3' type="submit" value="+ Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddNewItem;