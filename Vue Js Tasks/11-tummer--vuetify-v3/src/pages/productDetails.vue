<template>
    <appLoader v-if="getLoader" />
    <div v-if="!getLoader" class="container product-details-wrapper">
        <div>
            <router-link :to="{ name: 'home' }">Home</router-link> >
            <router-link
                :to="{
                    name: 'subCategories',
                    params: { category: this.$route.params.category },
                }"
            >
                {{ this.$route.params.category.replaceAll("-", " ") }}
            </router-link>
            >
            <router-link
                :to="{
                    name: 'productList',
                    params: {
                        category: this.$route.params.category,
                        subcategory: this.$route.params.subcategory,
                    },
                }"
            >
                {{ this.$route.params.subcategory.replaceAll("-", " ") }}
            </router-link>
            >
            {{ this.$route.params.product.replaceAll("-", " ") }}
        </div>
        <div class="image-container">
            <img class="image" :src="product.image" alt="" />
        </div>
        <div>
            <p v-if="stockOutWarning" class="warning">Out Of Stock</p>
            <p>Product Name:- {{ product.name }}</p>
            <p>Product Information:- {{ product.productDescription }}</p>
            <p>Product Name:- {{ product.price }}$</p>
            <p>Product Rating:- {{ getRating }}</p>
            <v-btn
                prepend-icon="fas fa-shopping-cart"
                @click="addToCart(product.id)"
                :loading="loading"
                rounded="lg"
                size="large"
                elevation="4"
            >
                Add To Cart
            </v-btn>
        </div>
    </div>
</template>

<script>
import appLoader from "@/components/UI/appLoader.vue";
import { getProducts } from "@/utils/helpers/getProducts";
import { isProductInStock } from "@/utils/helpers/isProductInStock";
import { mapActions, mapGetters } from "vuex";
export default {
    components: {
        appLoader,
    },
    created() {
        this.setLoader();
        this.product = getProducts().find((product) => {
            return (
                product.name === this.$route.params.product.replaceAll("-", " ")
            );
        });
        if (this.product) {
            this.removeLoader();
        } else if (!this.product) {
            this.$router.push({ name: "404" });
        }
    },

    data() {
        return {
            product: null,
            stockOutWarning: false,
            loading: false,
        };
    },

    methods: {
        ...mapActions({
            addItemToCart: "addItemToCart",
            setLoader: "loader/setLoader",
            removeLoader: "loader/removeLoader",
        }),
        addToCart(productId) {
            if (isProductInStock(productId)) {
                this.stockOutWarning = false;
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.addItemToCart(productId);
                }, 500);
            } else {
                this.stockOutWarning = true;
                setTimeout(() => {
                    this.stockOutWarning = false;
                }, 2000);
            }
        },
    },
    computed: {
        ...mapGetters({ isLoader: "loader/isLoader" }),
        getRating() {
            if (this.product?.rating.length > 0) {
                const totalRatingValue = this.product.rating.reduce(
                    (sum, current) => {
                        return sum + current;
                    }
                );
                return totalRatingValue / this.product.rating.length;
            } else {
                return 0;
            }
        },
        getLoader() {
            return this.isLoader;
        },
    },
};
</script>

<style scoped>
.product-details-wrapper {
    margin-top: 2rem;
}
.image {
    width: 300px;
}
.add-to-cart-button {
    border: 1px solid var(--primary-color);
    padding: 0.3rem;
    font-size: 1rem;
    border-radius: 4px;
    background: transparent;
    color: var(--primary-color);
}
.add-to-cart-button:active {
    box-shadow: var(--bg-shadow);
}
</style>
