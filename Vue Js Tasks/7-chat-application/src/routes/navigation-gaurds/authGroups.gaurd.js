export const authenticateGroupAccess = (to) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const loggedInUserId = JSON.parse(localStorage.getItem("user_at"))?.id;
    const loggedInUser = userData.find((user) => user.id === loggedInUserId);

    if (loggedInUser.groups.includes(parseInt(to.params.groupId))) {
        return true;
    } else {
        return false;
    }
};
