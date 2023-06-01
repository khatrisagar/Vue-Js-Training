import axios from "axios";
import { addPostInterface } from "@/interfaces";


axios.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${"token"}`;
    return config;
},
    (error) => {return Promise.reject(error)}
)

axios.interceptors.response.use(
    (response) => response,
    (error) => {
            if(error.response.status === 401){
                localStorage.removeItem('todo_at')
                location.href = '/auth'
            }
            return Promise.reject(error)
        }
);

export const axiosGet = (url : string, option= {}) => {
    return axios.get(`https://jsonplaceholder.typicode.com/${url}`, option);
};
export const axiosPost = (url: string, payload: addPostInterface, option= {}) => {
    return axios.post(`https://jsonplaceholder.typicode.com/${url}`, payload,option);
};
export const axiosPatch = (url: string, payload:addPostInterface, option= {}) => {
    return axios.patch(`https://jsonplaceholder.typicode.com/${url}`, payload,option);
};
export const axiosPut = (url: string, payload:addPostInterface, option= {}) => {
    return axios.put(`https://jsonplaceholder.typicode.com/${url}`, payload,option);
};
export const axiosDelete = (url: string, option={} ) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/${url}`,option);
};
