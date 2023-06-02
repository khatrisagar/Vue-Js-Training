import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/style.css";

import { router } from "@/routes/routes";
import { store } from "@/store/store";

import { setCart } from "@/routes/routing-actions/setCart";
import { setUser } from "@/utils/helpers/getLoggedInUserData";
import { setAllItems } from "@/utils/helpers/setInitialData";

import { vuetify } from "@/plugins/vuetify";

setUser();
setCart();
setAllItems();
const app = createApp(App);

app.use(vuetify);
app.use(store);
app.use(router);

app.mount("#app");
