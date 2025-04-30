import React from "react";
import "../App.css";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);

    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onDeleteTodo(id);
    };

    const updateTodo = (newTodo) => {
        const request = {
            id: id,
            content: newTodo,
        };

        onUpdateTodo(request);
        setEditable(false);
    };

    return (
        <div className='single-todo'>
            <div>
                {editable ? (
                    <input
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className='todo-input'
                        style={{ width: "400px" }}
                        type='text'
                    />
                ) : (
                    content
                )}
            </div>
            <div>
                {editable ? (
                    <FaCheck
                        className='todo-icons'
                        onClick={() => updateTodo(newTodo)}
                    />
                ) : (
                    <MdEdit
                        className='todo-icons'
                        onClick={() => setEditable(true)}
                    />
                )}

                <IoIosRemoveCircle
                    className='todo-icons'
                    onClick={removeTodo}
                />
            </div>
        </div>
    );
}

export default Todo;
