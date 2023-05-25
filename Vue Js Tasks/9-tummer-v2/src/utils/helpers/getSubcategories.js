import { productSubCategories } from "@/constants/products";
const setSubcategories = () => {
  localStorage.setItem(
    "productSubCategories",
    JSON.stringify(productSubCategories)
  );
};

export const getSubcategories = () => {
  setSubcategories();
  return JSON.parse(localStorage.getItem("productSubCategories"));
};
