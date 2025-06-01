
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Assuming you have a cartSlice for adding items

const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (products.length > 0) {
            const newProduct = products.find(product => product.id === parseInt(id));
            setProduct(newProduct || null);
        }
    }, [id, products]);

    if (!product) {
        return <div className="text-center text-xl mt-10">Product not found</div>;
    }

    return (
        <div className=" mx-auto p-6 bg-ternary">
            <div className="flex justify-center ml-24 mr-24 grid grid-cols-1 md:grid-cols-2 gap-8 bg-secondary p-6 rounded-lg shadow-lg">
                {/* Product Image */}
                <div>
                    <img src={product.img} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
        
                </div>

                {/* Product Details */}
                <div className='m-16'>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-xl font-semibold text-green-600 mt-4">${product.price}</p>

                    {/* Add to Cart Button */}
                    <button
                        className="mt-6 bg-fourth text-white px-6 py-2 rounded-lg "
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

