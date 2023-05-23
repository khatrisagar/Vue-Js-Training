export const authenticateUser = () => {
    const idLoggedInUserId =
        JSON.parse(localStorage.getItem("user_at"))?.id || null;
    console.log("checkkk");
    if (idLoggedInUserId) {
        return true;
    } else {
        return false;
    }
};
