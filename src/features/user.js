import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (userId) => {
        const response = await fetch(`api/users/${userId}`)
        const data = await response.json();
        return data;
    }
)