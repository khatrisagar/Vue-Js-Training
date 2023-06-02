import { getCategories } from "@/utils/helpers/getCategories";
export const subCategoryGaurd = (to) => {
    for (let category of getCategories()) {
        if (category.name.includes(to.params.category.replaceAll("-", " "))) {
            return true;
        } else {
            return false;
        }
    }
};
