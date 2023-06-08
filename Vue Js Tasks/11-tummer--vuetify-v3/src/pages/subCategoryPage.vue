<template>
    <div class="container subcategory-wrapper">
        <div>
            <router-link :to="{ name: 'home' }">Home</router-link> >
            {{ this.$route.params.category.replaceAll("-", " ") }}
        </div>
        <div
            class="card-container"
            :class="getDevice.name === 'md' ? 'flex-column' : 'flex-row'"
        >
            <productCard
                class="subcategory-card"
                v-for="subCategory in subCategoriesData"
                :key="subCategory.id"
                :product="subCategory"
                @click="viewProductList(subCategory.id)"
            />
        </div>
        <!-- {{ $vuetify.locale.current }}
        <v-app>
            <v-locale-provider locale="ja">
                {{ $vuetify.locale }}
                <div
                    class="card-container"
                    :class="
                        getDevice.name === 'md' ? 'flex-column' : 'flex-row'
                    "
                >
                    <productCard
                        class="subcategory-card"
                        v-for="subCategory in subCategoriesData"
                        :key="subCategory.id"
                        :product="subCategory"
                        @click="viewProductList(subCategory.id)"
                    />
                </div>
            </v-locale-provider>
        </v-app> -->
    </div>
</template>

<script>
// components

import productCard from "@/components/productCard.vue";

// other
// import { productSubCategories } from "@/constants/products";
import { getCategories } from "@/utils/helpers/getCategories";
import { getSubcategories } from "@/utils/helpers/getSubcategories";

import { ref, computed, onMounted } from "vue";
import { useDisplay } from "vuetify";
import { useRoute, useRouter } from "vue-router";
export default {
    components: {
        productCard,
    },

    setup() {
        const subCategoriesData = ref(null);
        const display = useDisplay();
        const route = useRoute();
        const router = useRouter();

        onMounted(() => {
            const category = getCategories().find(
                (category) =>
                    category.name === route.params.category.replaceAll("-", " ")
            );
            if (category) {
                subCategoriesData.value = getSubcategories().filter(
                    (subCategory) => subCategory.categoryId === category?.id
                );
            } else {
                router.push({ name: "404" });
            }
        });

        const viewProductList = (subCategoryId) => {
            const subCategory = subCategoriesData.value.find((subCategory) => {
                return subCategory.id === subCategoryId;
            });
            router.push({
                name: "productList",
                params: {
                    subcategory: subCategory.name.replaceAll(" ", "-"),
                },
            });
        };

        const getDevice = computed(() => {
            return display;
        });

        return { subCategoriesData, viewProductList, getDevice };
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
    overflow: hidden;
    gap: 2rem;
}
.subcategory-card {
    cursor: pointer;
    user-select: none;
}
</style>
