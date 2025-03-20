import React from "react";
import "../css/currency.css";
import { FaArrowRightLong } from "react-icons/fa6";

function Currency() {
    return (
        <div className='currency-div'>
            <div
                style={{
                    border: "1px solid black",
                    backgroundColor: "lightgray",
                    fontFamily: "Arial",
                    width: "450px",
                    justifyContent: "center",
                    display: "flex",
                    marginBottom: "20px",
                }}
            >
                <h1>Currency Converter</h1>
            </div>

            <div>
                <input type='number' className='amount' />

                <select className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowRightLong
                    style={{
                        fontSize: "25px",
                        border: "1px solid black",
                        marginTop: "10px",
                        marginRight: "20px",
                    }}
                />

                <select className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <input type='number' className='result' />
            </div>

            <div>
                <button className='exchange-button'>Exchange</button>
            </div>
        </div>
    );
}

export default Currency;
