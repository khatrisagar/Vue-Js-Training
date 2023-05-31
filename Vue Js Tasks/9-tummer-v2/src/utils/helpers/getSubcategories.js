export const getSubcategories = () => {
    return JSON.parse(localStorage.getItem("productSubCategories"));
};
