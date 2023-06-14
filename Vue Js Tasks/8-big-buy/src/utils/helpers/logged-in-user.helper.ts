import store from "@/store";

export const setLoggedInUserToState = () => {
  const authToken = localStorage.getItem("big_buy_at") || null;

  const userFromlocalStorage = localStorage.getItem("user");

  const user =
    userFromlocalStorage != null ? JSON.parse(userFromlocalStorage) : null;

  if (user?.length !== 0 && authToken) {
    store.dispatch("user/setLoggedInUserState", {
      authToken,
      id: user?.id,
      name: user?.name,
    });
  }
};
