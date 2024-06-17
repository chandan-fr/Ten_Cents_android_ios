import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { paypal } from "../../config/IconAssets";


export const userLogin = createAsyncThunk("/login", async ({ payload }, { rejectWithValue }) => {
    try {

    } catch (exc) {
        return rejectWithValue(exc.response.data);
    }
});

const UserSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: {},
        token: "",
        user_loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        // airport codes
        builder.addCase(userLogin.pending, (state, { payload }) => {
            state.user_loading = true;
        })
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.user_loading = false;
        })
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.error = payload;
            state.user_loading = false;
        })
    }
});

export const { } = UserSlice.actions;
export default UserSlice.reducer;