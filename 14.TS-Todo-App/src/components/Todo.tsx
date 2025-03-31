import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodoById } from "../redux/slices/TodoSlice";
import { useState } from "react";

interface todoProps {
    todoProps: TodoType;
}

function Todo({ todoProps }: todoProps) {
    const { id, content } = todoProps;

    const [editable, setEditable] = useState<Boolean>(false);

    const [newTodo, setNewTodo] = useState<string>(content);

    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    };

    const handleUpdate = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo,
        };

        dispatch(updateTodoById(payload));
        setEditable(false);
    };

    return (
        <div className='todo-list'>
            <div>
                {editable ? (
                    <input
                        value={newTodo}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setNewTodo(e.target.value)
                        }
                        className='input'
                        style={{
                            width: "400px",
                        }}
                        type='text'
                    />
                ) : (
                    content
                )}
            </div>
            <div>
                {editable ? (
                    <FaCheck className='todo-icons' onClick={handleUpdate} />
                ) : (
                    <MdEdit
                        className='todo-icons'
                        onClick={() => setEditable(true)}
                    />
                )}

                <IoIosRemoveCircle
                    onClick={handleRemoveTodo}
                    className='todo-icons'
                />
            </div>
        </div>
    );
}

export default Todo;
