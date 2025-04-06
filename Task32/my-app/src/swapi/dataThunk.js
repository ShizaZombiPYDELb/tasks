import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (value, { rejectWithValue, signal }) => {
        try {
            const response = await fetch(`https://swapi.dev/api/${value}`, { signal });
            if (!response.ok) throw new Error("Request failed");
            return await response.json();
        } catch (e) {
            return rejectWithValue(e.message ?? "Ошибка при загрузке данных");
        }
    }
);