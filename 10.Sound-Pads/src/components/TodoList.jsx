import React from "react";
import "../App.css";
import Todo from "./Todo";

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ width: "100%", marginTop: "100px" }}>
            {todos &&
                todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onRemoveTodo}
                        onUpdateTodo={onUpdateTodo}
                    />
                ))}
        </div>
    );
}

export default TodoList;
