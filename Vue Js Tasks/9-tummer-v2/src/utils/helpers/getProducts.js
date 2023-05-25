import { products } from "@/constants/products";
export const setProducts = () => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const getProducts = () => {
  //   setProducts();
  return JSON.parse(localStorage.getItem("products"));
};

export const resetProductSale = () => {
  JSON.parse(localStorage.getItem("products")).map(
    (product) => (product.isSale = false)
  );
  localStorage.setItem("products", JSON.stringify(products));
};
