// import { products } from "@/constants/products";
// export const setProducts = () => {
//     localStorage.setItem("products", JSON.stringify(products));
// };

export const getProducts = () => {
    // setProducts();
    return JSON.parse(localStorage.getItem("products"));
};

export const resetProductSale = () => {
    const products = getProducts();
    for (let product of products) {
        product.isSale = false;
    }
    localStorage.setItem("products", JSON.stringify(products));
};
