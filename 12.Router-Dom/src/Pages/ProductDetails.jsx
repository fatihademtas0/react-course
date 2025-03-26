import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/products.jsx";
import Product from "../components/Product.jsx";

function ProductDetails() {
    const { id } = useParams();
    return (
        <div>
            <div
                style={{
                    marginBottom: "40px",
                    backgroundColor: "lightgray",
                    width: "300px",
                }}
            >
                <div>
                    <h3>
                        {products &&
                            products.map((product) => {
                                if (product.id == id) {
                                    return (
                                        <Product key={id} product={product} />
                                    );
                                }
                            })}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
