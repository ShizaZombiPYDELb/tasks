import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './dataThunk';

const initialState = {
    data: null,
    loading: false,
    error: null
};

const swapiSlice = createSlice({
    name: 'swapi',
    initialState,
    reducers: {
        clearData: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;