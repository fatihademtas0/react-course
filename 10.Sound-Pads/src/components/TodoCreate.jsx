import React from "react";
import "../App.css";
import { useState } from "react";

function TodoCreate({ onCreateTodo }) {
    const [newTodo, setNewTodo] = useState("");

    const clearInput = () => {
        setNewTodo("");
    };

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 987),
            content: newTodo,
        };

        onCreateTodo(request);

        clearInput();
    };

    return (
        <div className='todo-create'>
            <input
                className='todo-input'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                type='text'
                placeholder='enter todo'
            />

            <button onClick={createTodo} className='todo-create-button'>
                Create Todo
            </button>
        </div>
    );
}

export default TodoCreate;
