import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/style.css";

import { router } from "@/routes/routes";
import { store } from "@/store/store";

import { setCart } from "@/routes/routing-actions/setCart";
import { setAllItems } from "@/utils/helpers/setInitialData";

const userToken = JSON.parse(localStorage.getItem("user_at"));
if (userToken) {
    store.dispatch("auth/setLogin", userToken.userId);
}
setCart();
setAllItems();
const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
