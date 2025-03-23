import {createSlice} from "@reduxjs/toolkit";

const TODOSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
            })
        }
    }
})

export const {addTodo} = TODOSlice.actions

export default TODOSlice.reducer