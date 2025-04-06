import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
        loading: false
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        clearTasks: (state) => {
            state.tasks = [];
        },
        editTask: (state, action) => {
            const { id, text, completed } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                if (text !== undefined) task.text = text;
                if (completed !== undefined) task.completed = completed;
            }
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { addTask, removeTask, clearTasks, editTask, setLoading } = todoSlice.actions;
export default todoSlice.reducer;