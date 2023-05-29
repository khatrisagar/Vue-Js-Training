// import { productCategories } from "@/constants/products";
// const setProductCategories = () => {
//   localStorage.setItem("productCategories", JSON.stringify(productCategories));
// };

export const getCategories = () => {
    // setProductCategories();

    return JSON.parse(localStorage.getItem("productCategories"));
};
