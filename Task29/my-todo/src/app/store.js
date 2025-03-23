import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TODO/TODOSlice.js";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});