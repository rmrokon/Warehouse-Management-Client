import useProducts from '../../hooks/useProducts';
import SingleProduct from '../SingleProducts/SingleProduct';

const Inventory = () => {
    const [products] = useProducts();

    return (
        <div>
            <h3 className='text-center text-2xl font-bold text-gray-600'>Items in Inventory</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <SingleProduct key={product._id} {...product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Inventory;