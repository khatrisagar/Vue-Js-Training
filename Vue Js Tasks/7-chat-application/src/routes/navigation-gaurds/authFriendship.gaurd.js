export const authenticateFriendshipStatus = (to) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const loggedInUserId = JSON.parse(localStorage.getItem("user_at"))?.id;
    const loggedInUser = userData.find((user) => user.id === loggedInUserId);

    if (loggedInUser?.friends.includes(parseInt(to.params.id))) {
        return true;
    } else {
        return false;
    }
};
