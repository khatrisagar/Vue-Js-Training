export const getProducts = () => {
    return JSON.parse(localStorage.getItem("products"));
};

export const resetProductSale = () => {
    const products = getProducts();
    console.log("products", products);
    for (let product of products) {
        product.isSale = false;
    }
    localStorage.setItem("products", JSON.stringify(products));
};
