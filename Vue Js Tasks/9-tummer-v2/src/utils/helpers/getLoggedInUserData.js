import { getUsers } from "@/utils/helpers/getUsers";
export const getLoggedInUserData = () => {
    const loggedInUserId = JSON.parse(localStorage.getItem("user_at"))?.userId;
    return getUsers().find((user) => user.id === loggedInUserId);
};
