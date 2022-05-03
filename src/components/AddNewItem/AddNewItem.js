import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import './AddNewItem.css';

const AddNewItem = () => {
    const formRef = useRef();

    const handleAddNewItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.stock.value;
        const supplier = e.target.supplier.value;
        const img = e.target.image.value;
        const description = e.target.description.value;

        const newProduct = { name, price, quantity, supplier, img, description };

        fetch("http://localhost:5000/addnewproduct", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                formRef.current.reset();

                console.log(data)
            })
    }
    return (
        <div>
            <h3 className='text-2xl text-center underline font-thin text-pink-600'>Fill up the form to add new product!</h3>
            <div className='flex justify-center place-items-center my-5'>
                <form className='w-full text-center' onSubmit={handleAddNewItem} ref={formRef}>
                    <input className='' type="text" name="name" placeholder='Product Name' /> <br />
                    <input className='' type="number" name="price" placeholder='Price in USD' /> <br />
                    <input className='' type="number" name="stock" placeholder='Stock Available' /> <br />
                    <input className='' type="text" name="supplier" placeholder='Supplier Name' /> <br />
                    <input className='' type="text" name="image" placeholder='Image Link' /> <br />
                    <textarea className='' name="description" placeholder='Description'></textarea> <br />
                    <input className='bg-pink-600 p-3 rounded-lg text-white mt-2' type="submit" value="+ Add New Product" />
                </form>
            </div>
        </div>
    );
};

export default AddNewItem;