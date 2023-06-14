import { createStore } from "vuex";

import user from "@/store/modules/user/user.store";
import item from "@/store/modules/item/item.store";

export default createStore({
  modules: {
    user,
    item,
  },
});
