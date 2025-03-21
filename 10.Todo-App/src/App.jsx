import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        const extractedArray = todos.filter((todo) => todo.id !== id);
        setTodos([...extractedArray]);
    };

    // const removeTodo = (id) => {   ****ALTERNATİVE WAY TO REMOVE****
    //   const index = todos.findIndex(todo => todo.id === id);
    //   if (index === -1) return; // Eğer ID bulunamazsa

    //   setTodos([
    //     ...todos.slice(0, index),  // Silinecek öğeye kadar olanlar
    //     ...todos.slice(index + 1)  // Silinecek öğeden sonrakiler
    //   ]);
    // };

    const updateTodo = (newTodo) => {
        const updatedArray = todos.map((todo) => {
            if (todo.id !== newTodo.id) {
                return todo;
            }
            return newTodo;
        });

        setTodos([...updatedArray]);
    };

    return (
        <div className='app'>
            <div className='todo-div'>
                <TodoCreate onCreateTodo={createTodo} />
                <TodoList
                    todos={todos}
                    onRemoveTodo={removeTodo}
                    onUpdateTodo={updateTodo}
                />
            </div>
            <div></div>
        </div>
    );
}

export default App;
