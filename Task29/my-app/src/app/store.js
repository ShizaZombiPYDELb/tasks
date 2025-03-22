import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TODO/TODOSlice.js";
import counterReducer from "../features/Counter/CounterSlice.js";

export const store = configureStore({
    reducer: {
        todos: todoReducer, // Редюсер для керування задачами
        counter: counterReducer, // Редюсер для керування лічильником
    },
});