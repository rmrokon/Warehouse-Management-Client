import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [productsByEmail, setProductsByEmail] = useState([]);

    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/getProductsByEmail?email=${email}`;

        const getProductsByEmail = async () => {
            const { data } = await axios(url);
            if (data) {
                setProductsByEmail(data);
            }
        }
        getProductsByEmail();
    }, [])
    return (
        <div>
            {
                productsByEmail.map(product => <h3>{product.name}</h3>)
            }
        </div>
    );
};

export default MyItems;