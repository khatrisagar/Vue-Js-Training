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
  </div>
</template>

<script>
import categoryCard from "@/components/categoryCard.vue";
import { getCategories } from "@/utils/helpers/getCategories";
import { getProducts, resetProductSale } from "@/utils/helpers/getProducts";
import productCard from "@/components/productCard.vue";
import { getSubcategories } from "@/utils/helpers/getSubcategories";

export default {
  components: {
    categoryCard,
    productCard,
  },
  mounted() {
    this.productCategories = getCategories();
    this.setSale();
  },
  data() {
    return {
      productCategories: null,
    };
  },

  methods: {
    viewSubCategory(categoryId) {
      const category = this.productCategories.find(
        (category) => category.id == categoryId
      );
      this.$router.push({
        name: "subCategories",
        params: { category: category.name.replaceAll(" ", "-") },
      });
    },

    // from trending products to product details
    viewProductDetails(productId) {
      const product = getProducts().find((product) => product.id === productId);

      const subCategory = getSubcategories().find(
        (subCategory) => subCategory.id === product.subCategoryId
      );

      const category = getCategories().find(
        (category) => category.id == subCategory.categoryId
      );

      this.$router.push({
        name: "productDetails",
        params: {
          category: category.name.replaceAll(" ", "-"),
          subcategory: subCategory.name.replaceAll(" ", "-"),
          product: product.name.replaceAll(" ", "-"),
        },
      });
    },
    setSale() {
      resetProductSale();
      const randomValueArray = Array(5)
        .fill()
        .map(() => Math.floor(Math.random() * getProducts().length));
      const allProducts = getProducts();
      const products = allProducts.forEach((product) => {
        if (randomValueArray.includes(product.id)) {
          product.isSale = true;
        }
      });
      console.log(products);
      localStorage.setItem("products", JSON.stringify(allProducts));
    },
  },
  computed: {
    getTrendingProducts() {
      let products = [];
      let isProductExist = false;
      const orders = JSON.parse(localStorage.getItem("orders")) ?? [];
      orders?.forEach((order) => {
        order?.product?.forEach((product) => {
          if (products.length) {
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
              isProductExist = false;
            }
          } else {
            products.push({
              id: product.id,
              quantity: product.quantity,
            });
          }
        });
      });
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
.trending-product-card-container {
  display: flex;
  gap: 2rem;
}
</style>
