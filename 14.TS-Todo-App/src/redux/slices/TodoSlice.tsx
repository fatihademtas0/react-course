import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoType } from "../../types/Types.tsx";

const initialState: TodoState = {
    todos: [],
};

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state: TodoState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload];
        },
        removeTodoById: (state: TodoState, action: PayloadAction<Number>) => {
            // we will get an id from action thats because its number typed
            state.todos = [
                ...state.todos.filter(
                    (todo: TodoType) => todo.id != action.payload
                ),
            ];
        },
        updateTodoById: (state: TodoState, action: PayloadAction<TodoType>) => {
            state.todos = [
                ...state.todos.map((todo: TodoType) =>
                    todo.id != action.payload.id ? todo : action.payload
                ),
            ];
        },
    },
});

// Action creators are generated for each case reducer function
export const { createTodo, removeTodoById, updateTodoById } = TodoSlice.actions;

export default TodoSlice.reducer;
