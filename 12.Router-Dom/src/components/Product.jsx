import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
    const { id, name, price } = product;

    const navigate = useNavigate();
    return (
        <div
            style={{
                marginBottom: "40px",
                backgroundColor: "lightgray",
                width: "300px",
            }}
        >
            <div>
                <h1>Product Detail</h1>
            </div>

            <div>
                <h3>Product Name: {name}</h3>
            </div>

            <div>
                <h3>Product Price: {price}</h3>
            </div>

            <div>
                <button
                    onClick={() => navigate("/product-details/" + id)}
                    style={{
                        padding: "5px 15px",
                        border: "none",
                        borderRadius: "10px",
                        borderColor: "gray",
                        cursor: "pointer",
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default Product;
