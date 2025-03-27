import React from "react";
import "../css/Product.css";

function Product({ product }) {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating: { rate, count },
    } = product;

    return (
        <div className='card'>
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
                    <button className='add-button'>Details</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
