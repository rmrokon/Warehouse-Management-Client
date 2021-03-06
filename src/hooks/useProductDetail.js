import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductDetail = (id) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProductDetail = async () => {
            await axios.get(`https://imanage24.herokuapp.com/product/${id}`)
                .then(response => setProduct(response.data))
        }
        getProductDetail();
    }, [id, product])
    return [product, setProduct]
};

export default useProductDetail;