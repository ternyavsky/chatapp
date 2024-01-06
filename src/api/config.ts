import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "http://127.0.0.1:8000",
    // baseURL: "http://213.171.10.182:8000",
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:8000",
        // "Access-Control-Allow-Origin": "http://213.171.10.182:8000",
        
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
})