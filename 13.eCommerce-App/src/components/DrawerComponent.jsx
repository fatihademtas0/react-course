import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, setDrawer } from "../redux/slices/basketSlice";

function DrawerComponent() {
    const { products, drawer, totalAmount } = useSelector(
        (store) => store.basket
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, []);

    return (
        <div>
            <Drawer
                className='drawer'
                sx={{ padding: "20px" }}
                anchor='right'
                open={drawer}
                onClose={() => dispatch(setDrawer())}
            >
                {products &&
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <div
                                    className='flex-row'
                                    style={{ padding: "20px" }}
                                >
                                    <img
                                        src={product.image}
                                        style={{ marginRight: "5px" }}
                                        width={50}
                                        height={50}
                                        alt={product.title}
                                    />

                                    <p
                                        style={{
                                            width: "320px",
                                            marginRight: "5px",
                                        }}
                                    >
                                        {product.title}({product.count})
                                    </p>

                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            marginRight: "10px",
                                        }}
                                    >
                                        {product.price} $
                                    </p>

                                    <button className='remove-button'>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                <h2>Total Amount : {totalAmount}</h2>
            </Drawer>
        </div>
    );
}

export default DrawerComponent;
