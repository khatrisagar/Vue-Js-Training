import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import store from "@/store";

export const isUserAuthenticated = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authToken = store.getters["user/getLoggedInUserState"].userAuthToken;
  if (authToken) {
    next();
  } else {
    next({
      name: "authLogin",
    });
  }
};
export const isUserNotAuthenticated = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authToken = store.getters["user/getLoggedInUserState"].userAuthToken;
  if (!authToken) {
    next();
  } else {
    next({
      name: "home",
    });
  }
};
