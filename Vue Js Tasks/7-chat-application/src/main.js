import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/commonStyles.css";

const app = createApp(App);

import { router } from "@/routes/appRoutes";

app.use(router);

app.mount("#app");
