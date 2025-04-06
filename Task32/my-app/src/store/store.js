import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from '../todo/TODO.slice';
import taskSaga from "../todo/TODO.saga";
import swapiReducer from "../swapi/starWarsSlice.js"


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        swapi: swapiReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(taskSaga);