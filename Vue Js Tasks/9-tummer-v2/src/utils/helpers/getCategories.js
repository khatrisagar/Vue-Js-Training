export const getCategories = () => {
    return JSON.parse(localStorage.getItem("productCategories"));
};
