import React from "react";
import Product from "../components/Product";
import { products } from "../Data/products.jsx";

function Products() {
    return (
        <div>
            <div>
                {products &&
                    products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
            </div>
        </div>
    );
}

export default Products;
