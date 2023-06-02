import {
    productCategories,
    productSubCategories,
    products,
} from "@/constants/products";

import { users } from "@/constants/users";

export const setAllItems = () => {
    const alreadyExistProductCategories = JSON.parse(
        localStorage.getItem("productCategories")
    );
    const alreadyExistProductSubCategories = JSON.parse(
        localStorage.getItem("productSubCategories")
    );
    const alreadyExistProducts = JSON.parse(localStorage.getItem("products"));
    const alreadyExistusers = JSON.parse(localStorage.getItem("users"));

    if (!alreadyExistProductCategories) {
        localStorage.setItem(
            "productCategories",
            JSON.stringify(productCategories)
        );
    }
    if (!alreadyExistProductSubCategories) {
        localStorage.setItem(
            "productSubCategories",
            JSON.stringify(productSubCategories)
        );
    }
    if (!alreadyExistProducts) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    if (!alreadyExistusers) {
        localStorage.setItem("users", JSON.stringify(users));
    }
};
