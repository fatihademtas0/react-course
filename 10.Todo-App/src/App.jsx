import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const createTodo = (newTodo) => {};

    return (
        <div className='app'>
            <div className='todo-div'>
                <TodoCreate />
                <TodoList />
            </div>
            <div></div>
        </div>
    );
}

export default App;
