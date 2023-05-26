// import { users } from "@/constants/users";
// const setUsers = () => {
//     localStorage.setItem("users", JSON.stringify(users));
// };
import { getUsers } from "@/utils/helpers/getUsers";
export const getLoggedInUserData = () => {
    // setUsers();
    const loggedInUserId = JSON.parse(localStorage.getItem("user_at"))?.userId;
    return getUsers().find((user) => user.id === loggedInUserId);
};
