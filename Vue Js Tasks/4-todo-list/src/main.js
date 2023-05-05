import { createApp } from "vue";
import App from "./App.vue";

import CustomPopUp from "./components/UI/CustomPopUp.vue";

const app = createApp(App);

app.component("CustomPopUp", CustomPopUp);
app.mount("#app");
