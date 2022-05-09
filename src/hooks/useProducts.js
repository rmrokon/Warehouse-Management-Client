import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(true);


    useEffect(() => {
        const getProducts = async () => {
            await axios.get('https://imanage24.herokuapp.com/products')
                .then(response => {
                    setReload(false);
                    console.log('this is inside', reload);
                    setProducts(response.data)
                })

        }
        getProducts();

        console.log(reload);
    }, [reload])


    return [products, setProducts, reload, setReload];
};

export default useProducts;