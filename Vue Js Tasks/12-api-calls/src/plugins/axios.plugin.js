import axios from "axios";

axios.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${"token"}`;
    return config;
});

axios.interceptors.response.use((config) => {
    return config;
});

export const axiosGet = (url) => {
    return axios.get(`https://jsonplaceholder.typicode.com/${url}`);
};

export const axiosPost = (url, payload) => {
    return axios.post(`https://jsonplaceholder.typicode.com/${url}`, payload);
};
export const axiosPatch = (url, payload) => {
    return axios.patch(`https://jsonplaceholder.typicode.com/${url}`, payload);
};
export const axiosDelete = (url) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/${url}`);
};
