import React from "react";
import "../App.css";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function Todo() {
    return (
        <div className='single-todo'>
            <div>Ben ilk todoyum</div>
            <div>
                <MdEdit className='todo-icons' />
                <IoIosRemoveCircle className='todo-icons' />
            </div>
        </div>
    );
}

export default Todo;
