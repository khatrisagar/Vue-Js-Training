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

    <div>
        <h3>Trending products</h3>
        {{ getTrendingProducts }}
    </div>
</template>

<script>
import categoryCard from "@/components/categoryCard.vue";
import { getCategories } from "@/utils/helpers/getCategories";

export default {
    components: {
        categoryCard,
    },
    mounted() {
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
    computed: {
        getTrendingProducts() {
            let products = [];
            const orders = JSON.parse(localStorage.getItem("orders"));
            orders.forEach((order) => {
                order.product.forEach((product) => {
                    // console.log(product.id, product.quantity);
                    products.forEach((productObject) => {
                        // console.log(productObject);
                        // console.log(product);
                        if (product.id === productObject.id) {
                            console.log(
                                "matched",
                                product.id,
                                productObject.id
                            );
                            productObject.quantity += product.quantity;
                        } else {
                            console.log(
                                "not matched",
                                product.id,
                                productObject.id
                            );
                            products.push({
                                id: product.id,
                                quantity: product.quantity,
                            });
                        }
                    });
                });
            });
            return products;
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
