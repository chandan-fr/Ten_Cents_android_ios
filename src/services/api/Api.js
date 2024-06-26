import axios from "axios";
import { _Base_URL } from "../../config/StaticVars";

const Api = axios.create({
    baseURL: _Base_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// get apis
export const GETAIRPORTCODES = (keyword) => Api.get(`/airports?keyword=${keyword}`);

// post apis
export const FLIGHTSEARCH = (flightData) => Api.post("/flights", flightData);
export const FLIGHTDETAILS = (flightData) => Api.post("/flights/details", flightData);
