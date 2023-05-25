import { products } from "@/constants/products";
const setProducts = () => {
    localStorage.setItem("products", JSON.stringify(products));
};

export const getProducts = () => {
    setProducts();
    return JSON.parse(localStorage.getItem("products"));
};
