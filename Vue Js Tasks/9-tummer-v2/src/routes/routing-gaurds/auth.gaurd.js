import { store } from "@/store/store";

export const authGaurd = () => {
    const userToken = JSON.parse(localStorage.getItem("user_at"));
    if (userToken) {
        store.dispatch("auth/setLogin");
        return true;
    } else {
        return false;
    }
};
