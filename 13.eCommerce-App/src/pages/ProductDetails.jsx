import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/DetailedProduct.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateTotal } from "../redux/slices/basketSlice";

function ProductDetails() {
    const { id } = useParams();

    const { products, selectedProduct } = useSelector((store) => store.product);

    const { title, price, description, category, image } = selectedProduct;

    const dispatch = useDispatch();

    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count++);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count--);
        }
    };

    const addBasket = () => {
        const payload = {
            id,
            title,
            price,
            description,
            image,
            count,
        };

        dispatch(addToBasket(payload));
        dispatch(calculateTotal());
    };

    useEffect(() => {
        getProductById(id);
    }, []);

    const getProductById = (id) => {
        products &&
            products.map((product) => {
                if (product.id == id) {
                    dispatch(setSelectedProduct(product));
                }
            });
    };
    return (
        <div
            className='detailed-card'
            style={{ justifyContent: "space-between" }}
        >
            <img className='detailed-image' src={image} alt={title} />

            <div>
                <h1 className='title'>{title}</h1>

                <p className='description'>{description}</p>

                <h3 className='price'>{price}$</h3>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <CiCirclePlus className='icon' onClick={increment} />
                    <span
                        style={{
                            fontSize: "35px",
                            marginLeft: "10px",
                            marginRight: "10px",
                        }}
                    >
                        {count}
                    </span>
                    <CiCircleMinus className='icon' onClick={decrement} />
                </div>

                <div>
                    <button onClick={addBasket} className='button'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
