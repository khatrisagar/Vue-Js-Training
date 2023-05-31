import { store } from "@/store/store";

export const setCart = () => {
    store.dispatch("loadCart");
};
