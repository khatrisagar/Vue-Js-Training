import { getProducts } from "@/utils/helpers/getProducts";
import { getSubcategories } from "@/utils/helpers/getSubcategories";
import { getCategories } from "@/utils/helpers/getCategories";

import { router } from "@/routes/routes";

export function getProductDetails(productId) {
    const product = getProducts().find((product) => product.id === productId);

    const subCategory = getSubcategories().find(
        (subCategory) => subCategory.id === product.subCategoryId
    );

    const category = getCategories().find(
        (category) => category.id == subCategory.categoryId
    );

    router.push({
        name: "productDetails",
        params: {
            category: category.name.replaceAll(" ", "-"),
            subcategory: subCategory.name.replaceAll(" ", "-"),
            product: product.name.replaceAll(" ", "-"),
        },
    });
}
