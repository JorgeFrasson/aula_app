import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:10000"
});

export function setAxiosAuthorization(token: string) {
    sessionStorage.setItem("accessToken", token);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} 