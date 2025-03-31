import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/slices/TodoSlice";
import { TodoType } from "../types/Types";

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>("");

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Enter a todo !");
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 8765),
            content: newTodo,
        };

        dispatch(createTodo(payload));
        setNewTodo("");
    };

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewTodo(e.target.value)
                }
                className='input'
                type='text'
                placeholder='Enter a todo...'
            />
            <button onClick={handleCreateTodo} className='create-button'>
                Create
            </button>
        </div>
    );
}

export default TodoCreate;
