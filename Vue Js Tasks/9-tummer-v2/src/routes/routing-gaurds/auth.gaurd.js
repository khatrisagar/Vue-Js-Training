import { store } from "@/store/store";

export const authGaurd = (to, from, next) => {
    const isUserLoggedIn = store.getters["auth/getIsUserLogin"];
    if (isUserLoggedIn) {
        next();
    } else {
        next({ name: "login" });
    }
};

export const alreadyLoginAuth = (to, from, next) => {
    const isUserLoggedIn = store.getters['auth/getIsUserLogin"'];
    if (isUserLoggedIn) {
        next({ name: "home" });
    } else {
        next();
    }
};
