import { store } from "@/store/store";
import { getUsers } from "@/utils/helpers/getUsers";
export const getLoggedInUserData = () => {
    const loggedInUserId = JSON.parse(localStorage.getItem("user_at"))?.userId;
    return getUsers().find((user) => user.id === loggedInUserId);
};

export const setUser = () => {
    const userToken = JSON.parse(localStorage.getItem("user_at"));
    if (userToken) {
        store.dispatch("auth/setLogin", userToken.userId);
    }
};
