import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/style.css";

import { router } from "@/routes/routes";
import { store } from "@/store/store";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
