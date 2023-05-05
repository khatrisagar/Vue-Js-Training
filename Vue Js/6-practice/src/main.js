import { createApp } from "vue";
import App from "./App.vue";

import BaseButton from "./components/UI/BaseButton.vue";
import BaseCardVue from "./components/UI/BaseCard.vue";

const app = createApp(App);
app.component("base-button", BaseButton);
app.component("base-card", BaseCardVue);
app.mount("#app");
