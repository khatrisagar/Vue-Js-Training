import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/style.css";
import { router } from "@/routes";


import axios from "axios";

axios.interceptors.request.use((config) => {
    const big_sell_at = localStorage.getItem('big_sell_at') ?? 'aaa';
    config.baseURL = "http://localhost:3000"
    config.headers['Authorization'] = `Bearer ${big_sell_at}`
    return config
})


const app = createApp(App);

app.use(router);
app.mount("#app");
