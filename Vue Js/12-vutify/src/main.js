import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});

app.use(vuetify);
app.mount("#app");
