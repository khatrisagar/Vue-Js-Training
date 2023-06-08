// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VBtn } from "vuetify/components/VBtn";
import { pl, zhHans } from "vuetify/locale";

const lightTheme = {
    dark: false,
    colors: {
        primary: "#04a64a",
        secondary: "#ffffff",
        "btn-text": "#000000",
    },
};

const darkTheme = {
    dark: true,
    colors: {
        primary: "#4A148C",
        secondary: "#000000",
        "btn-text": "#ffffff",
    },
};

export const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: JSON.parse(localStorage.getItem("theme")) || "dark",
        themes: {
            light: lightTheme,
            dark: darkTheme,
        },
    },
    display: {
        mobileBreakpoint: "sm",
        thresholds: {
            xs: 0,
            sm: 340,
            md: 540,
            lg: 800,
            xl: 1280,
        },
    },
    locale: {
        locale: "pl",
        messages: { pl, zhHans },
    },
    aliases: {
        VBtnSecondary: VBtn,
        HeaderBtn: VBtn,
    },

    defaults: {
        VBtn: {
            color: "primary",
            rounded: true,
            class: "text-white",
        },
        VBtnSecondary: {
            color: "#ffffff",
            class: "text-btn-text",
            rounded: true,
        },
        HeaderBtn: {
            // variant: "text",
            color: "#00000066",
            class: "text-white",
        },
    },
});
