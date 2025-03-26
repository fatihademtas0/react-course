import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initialState = {
    users: [],
    loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // if there is not any HTTP request, we can use this function
    },
    extraReducers: (builder) => {
        // if there is any HTTP request, we can use this function

        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
