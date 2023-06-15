import axios from "axios";
import store from "@/store";

// const authToken: string | null =
// store.getters["user/getLoggedInUserState"].userAuthToken;

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("big_buy_at")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "big_buy_at"
      )}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("big_buy_at");
      localStorage.removeItem("user");
      location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export const axiosGet = (url: string, option = {}) => {
  return axios.get(`${process.env.VUE_APP_URL}/${url}`, option);
};
export const axiosPost = (url: string, payload: object, option = {}) => {
  return axios.post(`${process.env.VUE_APP_URL}/${url}`, payload, option);
};

export const axiosPatch = (url: string, payload: object, option = {}) => {
  return axios.patch(`${process.env.VUE_APP_URL}/${url}`, payload, option);
};
export const axiosPut = (url: string, payload: object, option = {}) => {
  return axios.put(
    `https://jsonplaceholder.typicode.com/${url}`,
    payload,
    option
  );
};
export const axiosDelete = (url: string, option = {}) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/${url}`, option);
};
