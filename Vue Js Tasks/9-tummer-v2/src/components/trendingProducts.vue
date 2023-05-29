<template>
    <div>
        <h3>Trending products</h3>
        <div class="trending-product-card-container">
            <productCard
                v-for="product in getTrendingProductsData"
                :key="product.id"
                :product="product"
                @click="viewProductDetails(product.id)"
            />
        </div>
    </div>
</template>

<script>
import productCard from "@/components/productCard.vue";
import { getProductDetails } from "@/utils/helpers/getProductDetails";
import { getProducts } from "@/utils/helpers/getProducts";

export default {
    components: {
        productCard,
    },
    methods: {
        // from trending products to product details
        viewProductDetails(productId) {
            getProductDetails(productId);
        },
    },
    computed: {
        getTrendingProducts() {
            let products = [];
            const orders = JSON.parse(localStorage.getItem("orders")) ?? [];
            const orderedProducts = [];
            orders.map((order) => {
                orderedProducts.push(...order.product);
            });
            orderedProducts.forEach((product) => {
                if (products.length) {
                    let isProductExist = false;
                    products.forEach((productObject) => {
                        if (product.id === productObject.id) {
                            isProductExist = true;
                            productObject.quantity += product.quantity;
                        }
                    });
                    if (!isProductExist) {
                        products.push({
                            id: product.id,
                            quantity: product.quantity,
                        });
                    }
                } else {
                    products.push({
                        id: product.id,
                        quantity: product.quantity,
                    });
                }
            });

            //   orders?.forEach((order) => {
            //     order?.product?.forEach((product) => {
            //       console.log(product);
            //       if (products.length) {
            //         let isProductExist = false;
            //         products.forEach((productObject) => {
            //           if (product.id === productObject.id) {
            //             isProductExist = true;
            //             productObject.quantity += product.quantity;
            //           }
            //         });
            //         if (!isProductExist) {
            //           products.push({
            //             id: product.id,
            //             quantity: product.quantity,
            //           });
            //         }
            //       } else {
            //         products.push({
            //           id: product.id,
            //           quantity: product.quantity,
            //         });
            //       }
            //     });
            //   });
            const sortedProducts = products.sort((a, b) => {
                return b.quantity - a.quantity;
            });
            return sortedProducts;
        },
        getTrendingProductsData() {
            const trendingProducts = [];

            for (let trendingProduct of this.getTrendingProducts.slice(0, 3)) {
                getProducts().filter((product) => {
                    if (trendingProduct.id === product.id) {
                        trendingProducts.push(product);
                    }
                });
            }

            return trendingProducts;
        },
    },
};
</script>

<style scoped>
.trending-product-card-container {
    display: flex;
    gap: 2rem;
}
</style>
