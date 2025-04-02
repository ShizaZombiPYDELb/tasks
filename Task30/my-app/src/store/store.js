import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./starWarsSlice.js"

export const store = configureStore({
    reducer: {
        swapi: swapiReducer,
    },
});