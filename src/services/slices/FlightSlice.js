import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FLIGHTDETAILS, FLIGHTSEARCH, GETAIRPORTCODES } from "../api/Api";

export const getAirportCodes = createAsyncThunk("/airports", async ({ searchKey }, { rejectWithValue }) => {
    try {
        const res = await GETAIRPORTCODES(searchKey.toUpperCase());
        return res.data;
    } catch (exc) {
        // if (exc.response) {
        //     console.log('Problem with response:', exc.response.status);
        // } else if (exc.request) {
        //     console.log('Problem with request:', exc.request);
        // } else {
        //     console.log('Error:', exc.message);
        // }
        return rejectWithValue(exc.response.data);
    }
});

export const flightSearch = createAsyncThunk("/flights", async ({ flightData, formValue, navigation }, { rejectWithValue }) => {
    try {
        const res = await FLIGHTSEARCH(flightData);
        if (res?.data?.length) {
            navigation.navigate("flightsearch");
            return { flights: res.data, formValue };
        } else {
            navigation.navigate("flightsearch");
            return { flights: [], formValue };
        }
    } catch (exc) {
        Alert.alert(exc.response.data?.error);
        console.log("Error", exc.response.data);
        return rejectWithValue(exc.response.data);
    }
});

export const getFlightDetails = createAsyncThunk("/flights/details", async ({ flightDetailsData, navigation }, { rejectWithValue }) => {
    try {
        const res = await FLIGHTDETAILS(flightDetailsData);
        if (Object.keys(res?.data).length > 0) {
            setTimeout(() => navigation.navigate("flightreview"), 300);
            return res.data;
        }
    } catch (exc) {
        Alert.alert(exc.response.data?.error);
        console.log("Error", exc.response.data);
        return rejectWithValue(exc.response.data);
    }
});

const FlightSlice = createSlice({
    name: "flightSlice",
    initialState: {
        airport_codes: [],
        flight_data: [],
        flight_search_data: {},
        flight_details: {},
        flight_loading: false,
        error: null,
        travellers: [],
    },
    reducers: {
        addUserAddress(state, { payload }) {
            const users = state.travellers;
            users.push(payload.userAddress);
            state.travellers = users;
            payload.navigation.navigate("flightreview");
        },
        selectUser(state, { payload }) {
            if (payload >= 0 && payload < state.travellers.length) {
                const data = state.travellers;
                data[payload].isSelected = !data[payload].isSelected;
                state.travellers = data;
            } else {
                console.log("Invalid index");
            }
        },
        deleteUser(state, { payload }) {
            if (payload >= 0 && payload < state.travellers.length) {
                const data = state.travellers;
                data.splice(payload, 1);
                state.travellers = data;
            } else {
                console.log("Invalid index");
            }
        },
    },
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

        // flight search
        builder.addCase(flightSearch.pending, (state, { payload }) => {
            state.flight_loading = true;
        })
        builder.addCase(flightSearch.fulfilled, (state, { payload }) => {
            state.flight_data = payload.flights;
            state.flight_search_data = payload.formValue;
            state.flight_loading = false;
        })
        builder.addCase(flightSearch.rejected, (state, { payload }) => {
            state.error = payload;
            state.flight_loading = false;
        })

        // flight details
        builder.addCase(getFlightDetails.pending, (state, { payload }) => {
            state.flight_loading = true;
        })
        builder.addCase(getFlightDetails.fulfilled, (state, { payload }) => {
            state.flight_details = payload;
            state.flight_loading = false;
        })
        builder.addCase(getFlightDetails.rejected, (state, { payload }) => {
            state.error = payload;
            state.flight_loading = false;
        })
    }
});

export const { addUserAddress, selectUser, deleteUser } = FlightSlice.actions;
export default FlightSlice.reducer;