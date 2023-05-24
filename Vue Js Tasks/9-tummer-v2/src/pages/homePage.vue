<template>
    <div class="home-page-wrapper container">
        <div class="category-sidebar">
            <categoryCard
                class="category-card"
                v-for="productCategory in productCategories"
                :key="productCategory.id"
                :productCategory="productCategory"
                @click="viewSubCategory(productCategory.id)"
            />
        </div>
    </div>
</template>

<script>
import categoryCard from "@/components/categoryCard.vue";
import { getCategories } from "@/utils/helpers/getCategories";

// import { productCategories } from "@/constants/products";

export default {
    components: {
        categoryCard,
    },
    mounted() {
        // localStorage.setItem(
        //     "productCategories",
        //     JSON.stringify(productCategories)
        // );
        this.productCategories = getCategories();
    },
    data() {
        return {
            productCategories: null,
        };
    },

    methods: {
        viewSubCategory(categoryId) {
            const category = this.productCategories.find((category) => {
                return category.id == categoryId;
            });
            console.log(category);
            this.$router.push({
                name: "subCategories",
                params: { category: category.name.replaceAll(" ", "-") },
            });
        },
    },
};
</script>

<style scoped>
.category-sidebar {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.category-card {
    user-select: none;
    cursor: pointer;
}
</style>
