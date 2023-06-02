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
        VBtnTertiary: VBtn,
        vCommonButton: VBtn,
    },
    defaults: {
        VBtn: {
            color: "#29B6F6",
            class: "text-black ma-2",
        },
        VBtnSecondary: {
            color: "#1DE9B6",
            class: "text-black ma-2",
        },
        VBtnTertiary: {
            color: "#C6FF00",
            class: "text-black ma-2",
        },
        vCommonButton: {
            color: "primary",
        },
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: "#212121",
                    primaryText: "#BDBDBD",
                },
            },
        },
    },
});
