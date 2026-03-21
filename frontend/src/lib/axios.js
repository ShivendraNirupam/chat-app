import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://chat-app-8-qbs2.onrender.com/api",
    withCredentials: true,
})