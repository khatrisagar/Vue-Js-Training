import { store } from "@/store/store";
// import {
//     productCategories,
//     productSubCategories,
//     products,
// } from "@/constants/products";

// import { users } from "@/constants/users";

// export const setAllItems = () => {
//     localStorage.setItem(
//         "productCategories",
//         JSON.stringify(productCategories)
//     );
//     localStorage.setItem("products", JSON.stringify(products));
//     localStorage.setItem(
//         "productSubCategories",
//         JSON.stringify(productSubCategories)
//     );
//     localStorage.setItem("users", JSON.stringify(users));
// };

export const setCart = () => {
    // setAllItems();
    store.dispatch("loadCart");
};
