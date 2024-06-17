import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GETAIRPORTCODES } from "../api/Api";

export const getAirportCodes = createAsyncThunk("/airports", async ({ searchKey }, { rejectWithValue }) => {
    try {
        const res = await GETAIRPORTCODES(searchKey);
        return res.data;
    } catch (exc) {
        return rejectWithValue(exc.response.data);
    }
});

const FlightSlice = createSlice({
    name: "flightSlice",
    initialState: {
        airport_codes: [],
        flight_loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        // airport codes
        builder.addCase(getAirportCodes.pending, (state, { payload }) => {
            state.flight_loading = true;
        })
        builder.addCase(getAirportCodes.fulfilled, (state, { payload }) => {
            state.airport_codes = payload;
            state.flight_loading = false;
        })
        builder.addCase(getAirportCodes.rejected, (state, { payload }) => {
            state.error = payload;
            state.flight_loading = false;
        })
    }
});

export const { } = FlightSlice.actions;
export default FlightSlice.reducer;