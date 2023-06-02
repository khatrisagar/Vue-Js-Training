<template>
  <div class="container subcategory-wrapper">
    <div>
      <router-link :to="{ name: 'home' }">Home</router-link> >
      {{ this.$route.params.category.replaceAll("-", " ") }}
    </div>
    <div class="card-container">
      <productCard
        class="subcategory-card"
        v-for="subCategory in subCategoriesData"
        :key="subCategory.id"
        :product="subCategory"
        @click="viewProductList(subCategory.id)"
      />
    </div>
  </div>
</template>

<script>
// components

import productCard from "@/components/productCard.vue";

// other
// import { productSubCategories } from "@/constants/products";
import { getCategories } from "@/utils/helpers/getCategories";
import { getSubcategories } from "@/utils/helpers/getSubcategories";
export default {
  components: {
    productCard,
  },
  mounted() {
    const category = getCategories().find(
      (category) =>
        category.name === this.$route.params.category.replaceAll("-", " ")
    );
    if (category) {
      this.subCategoriesData = getSubcategories().filter(
        (subCategory) => subCategory.categoryId === category?.id
      );
    } else {
      this.$router.push({ name: "404" });
    }
  },
  data() {
    return {
      subCategoriesData: null,
    };
  },
  methods: {
    viewProductList(subCategoryId) {
      const subCategory = this.subCategoriesData.find((subCategory) => {
        return subCategory.id === subCategoryId;
      });
      this.$router.push({
        name: "productList",
        params: {
          subcategory: subCategory.name.replaceAll(" ", "-"),
        },
      });
    },
  },
};
</script>

<style scoped>
a {
  color: var(--black);
}
.subcategory-wrapper {
  margin-top: 2rem;
}
.card-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}
.subcategory-card {
  cursor: pointer;
  user-select: none;
}
</style>
