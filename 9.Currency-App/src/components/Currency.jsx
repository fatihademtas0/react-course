import React from "react";
import "../css/currency.css";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

let API_KEY = "fca_live_qzM6BLlUsGLVGVtJhrmRQcFlDabYX5frvg9gELFz";

let EXCHANGE_API = `${BASE_URL}?apikey=${API_KEY}`;

function Currency() {
    const [amount, setAmount] = React.useState(0);
    const [fromCurrency, setFromCurrency] = React.useState("USD");
    const [toCurrency, setToCurrency] = React.useState("TRY");
    const [result, setResult] = React.useState(0);

    const exchange = async () => {
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);
        // console.log(result);

        const response = await axios.get(
            `${EXCHANGE_API}&base_currency=${fromCurrency}`
        );

        const result = (amount * response.data.data[toCurrency]).toFixed(2);
        setResult(result);

        console.log(result);
    };

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
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type='number'
                    className='amount'
                />

                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'
                >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowRightLong
                    style={{
                        fontSize: "25px",
                        border: "3px solid black",
                        borderRadius: "50%",
                        marginTop: "10px",
                        marginRight: "20px",
                    }}
                />

                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'
                >
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <input
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type='number'
                    className='result'
                />
            </div>

            <div>
                <button onClick={exchange} className='exchange-button'>
                    Exchange
                </button>
            </div>
        </div>
    );
}

export default Currency;
