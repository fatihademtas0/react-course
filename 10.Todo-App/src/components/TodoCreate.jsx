import React from "react";
import "../App.css";

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input
                className='todo-input'
                type='text'
                placeholder='enter todo'
            />

            <button className='todo-create-button'>Create Todo</button>
        </div>
    );
}

export default TodoCreate;
