import { createStore } from "vuex";

import user from "@/store/modules/user/user.store";
import item from "@/store/modules/item/item.store";
import loader from "@/store/modules/common/loader.store";

export default createStore({
  modules: {
    user,
    item,
    loader,
  },
});
