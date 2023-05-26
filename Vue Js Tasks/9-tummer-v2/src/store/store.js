import { createStore } from "vuex";

import auth from "@/store/modules/auth";
import cartStore from "@/store/modules/cart";
import saleStore from "@/store/modules/productsSale";
import loader from "@/store/modules/loader";

export const store = createStore({
    modules: {
        auth,
        cartStore,
        saleStore,
        loader,
    },
});
