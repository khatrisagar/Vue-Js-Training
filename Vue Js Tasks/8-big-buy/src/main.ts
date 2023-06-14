import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { vuetify } from "@/plugins";
import "@/styles/style.css";

createApp(App).use(store).use(router).use(vuetify).mount("#app");
