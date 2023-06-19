import "@fortawesome/fontawesome-free/css/all.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VBtn } from "vuetify/components/VBtn";
import { aliases, fa } from "vuetify/iconsets/fa";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#000000",
    "primary-text": "#6e73cf",
    "dim-black": "#424242",
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#311B92",
    // secondary: "#000000",
    // "btn-text": "#ffffff",
  },
};

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  defaults: {
    VBtn: {
      color: "#000000",
      class: "text-white",
    },
  },
});
