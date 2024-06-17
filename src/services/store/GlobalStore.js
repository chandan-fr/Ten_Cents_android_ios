import { configureStore } from "@reduxjs/toolkit";
import FlightSlice from "../slices/FlightSlice";
import UserSlice from "../slices/UserSlice";

const store = configureStore({
    reducer: {
        flightSlice: FlightSlice,
        userSlice: UserSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export default store;