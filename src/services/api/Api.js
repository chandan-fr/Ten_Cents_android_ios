import axios from "axios";
import { _Base_URL } from "../../config/StaticVars";

const Api = axios.create({baseURL: _Base_URL});

// get apis
export const GETAIRPORTCODES = (keyword) => Api.get(`/airports?keyword=${keyword}`);