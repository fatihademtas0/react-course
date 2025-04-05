import React from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

function App() {
    const { count, increment, decrement } = useCounter();

    const { open, change } = useToggle();

    const [copied, copy] = useCopyToClipboard("Hello World !");

    return (
        <>
            {open ? (
                <div style={{ border: "1px solid black", padding: "10px" }}>
                    <div>{count}</div>
                    <div>
                        <button onClick={increment}>İncrease</button>
                        <button onClick={decrement}>Decrease</button>
                    </div>
                </div>
            ) : (
                <p>Content hidden.</p>
            )}

            <div>
                <button onClick={change}>{open ? "Hide" : "Open"}</button>
            </div>

            <div>
                {copied && "Text copied to clipboard !"}
                <button onClick={copy}>Copy</button>
            </div>
        </>
    );
}

export default App;
