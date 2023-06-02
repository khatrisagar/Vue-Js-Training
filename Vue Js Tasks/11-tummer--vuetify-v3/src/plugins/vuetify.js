// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VBtn } from "vuetify/components/VBtn";

export const vuetify = createVuetify({
    components,
    directives,
    aliases: {
        VBtnSecondary: VBtn,
        HeaderBtn: VBtn,
    },
    defaults: {
        VBtn: {
            color: "#04a64a",
            rounded: true,
            class: "text-white",
        },
        VBtnSecondary: {
            color: "#ffffff",
            "color--text": "#ffffff",
            rounded: true,
        },
        HeaderBtn: {
            // variant: "text",
            color: "#00000066",
            class: "text-white",
        },
    },
});
