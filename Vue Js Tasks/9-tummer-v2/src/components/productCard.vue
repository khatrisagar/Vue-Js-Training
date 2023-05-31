<template>
    <div class="card-wrapper">
        <div class="sub-category-image-container">
            <img
                class="card-image"
                :src="product.image"
                alt="sub category images"
            />
        </div>
        <div>
            <p>
                {{ product.name }}
            </p>
            <p class="sale-text" v-if="product.isSale && isSale">
                This Product Is on Sale
            </p>
            <p v-if="product.price">Price-{{ product.price }} $</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: {
        product: {
            type: Object,
        },
    },
    computed: {
        ...mapGetters({ getSaleStatus: "saleStore/getSaleStatus" }),
        isSale() {
            return this.getSaleStatus;
        },
    },
};
</script>

<style scoped>
.card-wrapper {
    border: 1px solid black;
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 230px;
}
.card-image {
    height: 150px;
}
.sale-text {
    color: var(--primary-color);
}
</style>
