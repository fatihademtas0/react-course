import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
    const { id, title, price, description, category, image } = product;

    const navigate = useNavigate();

    return (
        <div
            className='card'
            onClick={() => navigate("/product-details/" + id)}
        >
            <img className='image' src={image} alt={title} />

            <div>
                <p
                    style={{
                        alignItems: "center",
                        height: "50px",
                    }}
                >
                    {title}
                </p>
                <div
                    className='flex-row'
                    style={{
                        justifyContent: "space-between",
                    }}
                >
                    <h3 style={{ alignItems: "center" }}>{price}$</h3>
                    <button
                        onClick={() => navigate("/product-details/" + id)}
                        className='add-button'
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
