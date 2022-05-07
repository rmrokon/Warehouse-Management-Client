import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            await axios.get('https://imanage24.herokuapp.com/products')
                .then(response => {
                    setProducts(response.data)
                })

        }
        getProducts();
    }, [])

    return [products, setProducts];
};

export default useProducts;