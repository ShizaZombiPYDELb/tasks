import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./CounterSlice.js";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;