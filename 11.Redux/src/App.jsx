import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./Redux/store";
import { decrement, increment } from "./Redux/counterSlice";
import UserList from "./UserList";

function App() {
    // USESELECTOR = TO USE THE STATE İN THE SLİCE
    const { value } = useSelector((store) => store.counter);

    // USEDİSPATCH = TO USE THE FUNCTİON İN THE SLİCE
    const dispatch = useDispatch();

    console.log(value);
    return (
        <div>
            <div>{value}</div>
            <div>
                <button onClick={() => dispatch(increment())}>İncrease</button>
                <button onClick={() => dispatch(decrement())}>Decrease</button>
            </div>

            <div>
                <UserList />
            </div>
        </div>
    );
}

export default App;
