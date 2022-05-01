import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            await axios.get('http://localhost:5000/products')
                .then(response => {
                    setProducts(response.data)
                })

        }
        getProducts();
    }, [])

    return [products];
};

export default useProducts;