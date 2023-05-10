<template>
    <div class="app-data-container container">
        <appSidebar
            class="appSidebar"
            :productCategoryData="productCategoryData"
            @openSubcategory="openSubcategory"
        />

        <div class="app-content-right">
            <!-- layer 1 -->
            <div
                :style="{
                    display:
                        currenView === 'productSubcategory' ? 'block' : 'none',
                }"
            >
                <productSubcategory
                    class="productSubcategory"
                    :productSubCategoryData="productSubCategoryView"
                    @openSubcategoryProducts="openSubcategoryProducts"
                />
            </div>
            <!-- layer 2 -->
            <div
                :style="{
                    display:
                        currenView === 'subcategoryItemList' ? 'block' : 'none',
                }"
            >
                <subcategoryItemList
                    :SubcategoryItemsData="SubcategoryItemsView"
                    @productDetail="productDetail"
                    @goToSubcategory="goToSubcategory"
                />
            </div>
            <!-- layer 3 -->
            <div
                :style="{
                    display: currenView === 'item' ? 'block' : 'none',
                }"
            >
                <productDetail
                    :itemDetails="itemDetails"
                    @gotToProductCategory="gotToProductCategory"
                />
            </div>
        </div>
    </div>
</template>

<script>
import appSidebar from "../Layout/appSidebar.vue";
import productSubcategory from "../Layout/productSubcategory.vue";
import subcategoryItemList from "../Layout/subcategoryItemList.vue";
import productDetail from "../Layout/productDetail.vue";

import productcategoryOne from "../../assets/asset 7.png";
import productcategoryTwo from "../../assets/asset 8.png";
import productcategoryThree from "../../assets/asset 9.png";
import productcategoryFour from "../../assets/asset 10.png";
import productcategoryFive from "../../assets/asset 11.png";
import productcategorySix from "../../assets/asset 12.png";

export default {
    components: {
        appSidebar,
        productSubcategory,
        subcategoryItemList,
        productDetail,
    },
    data() {
        return {
            currenView: null,
            // sidebar

            productCategoryData: [
                {
                    productCategoryId: "1",
                    productCategoryImage: productcategoryOne,
                    productCategoryName: "Image and Sound",
                },
                {
                    productCategoryId: "2",
                    productCategoryImage: productcategoryTwo,
                    productCategoryName: "Computers and Tablets",
                },
                {
                    productCategoryId: "3",
                    productCategoryImage: productcategoryThree,
                    productCategoryName: "Home Appliences",
                },
                {
                    productCategoryId: "4",
                    productCategoryImage: productcategoryFour,
                    productCategoryName: "Kitchen",
                },
                {
                    productCategoryId: "5",
                    productCategoryImage: productcategoryFive,
                    productCategoryName: "Sports and care",
                },
                {
                    productCategoryId: "6",
                    productCategoryImage: productcategorySix,
                    productCategoryName: "Other Categories",
                },
            ],
            // layer 1

            productSubCategoryData: [
                {
                    productSubCategoryId: "1",
                    productCategoryId: "1",
                    productCategoryImage: productcategoryOne,
                    productCategoryName: "Television",
                },
                {
                    productSubCategoryId: "2",
                    productCategoryId: "1",
                    productCategoryImage: productcategoryTwo,
                    productCategoryName: "Televisie accessoires",
                },
                {
                    productSubCategoryId: "3",
                    productCategoryId: "1",
                    productCategoryImage: productcategoryThree,
                    productCategoryName: "Home cinema",
                },
                {
                    productSubCategoryId: "4",
                    productCategoryId: "1",
                    productCategoryImage: productcategoryFour,
                    productCategoryName: "Speakers",
                },
                {
                    productSubCategoryId: "5",
                    productCategoryId: "1",
                    productCategoryImage: productcategoryFive,
                    productCategoryName: "Hifi & Personal audio",
                },
                {
                    productSubCategoryId: "6",
                    productCategoryId: "2",
                    productCategoryImage: productcategorySix,
                    productCategoryName: "Other Categories",
                },
                {
                    productSubCategoryId: "7",
                    productCategoryId: "2",
                    productCategoryImage: productcategorySix,
                    productCategoryName: "Other Categories",
                },
                {
                    productSubCategoryId: "8",
                    productCategoryId: "2",
                    productCategoryImage: productcategorySix,
                    productCategoryName: "Other Categories",
                },
                {
                    productSubCategoryId: "9",
                    productCategoryId: "3",
                    productCategoryImage: productcategoryFour,
                    productCategoryName: "Refrigrator",
                },
                {
                    productSubCategoryId: "10",
                    productCategoryId: "3",
                    productCategoryImage: productcategoryFour,
                    productCategoryName: "Speakers",
                },
            ],
            // layer 2&3
            SubcategoryItemsData: [
                {
                    id: "1",
                    productSubCategoryId: "1",
                    image: productcategoryOne,
                    name: "Television",
                    price: "100$",
                    rating: 4.9,
                    origin: "india",
                    description: "hfsdjkfh dhf fih sdjf sdhf ",
                },
                {
                    id: "2",
                    productCategoryId: "1",
                    image: productcategoryTwo,
                    name: "Computers and Tablets",
                    price: "10$",
                    rating: 4.9,
                    origin: "india",
                    description: "hfsdjgrwegkfh dhf fih sdjf sdhf ",
                },
                {
                    id: "3",
                    productCategoryId: "1",
                    image: productcategoryThree,
                    name: "Home Appliences",
                    price: "200$",
                    rating: 4.9,
                    origin: "india",
                    description: "hrwfed dhf fih das sdhf ",
                },
                {
                    id: "4",
                    productSubCategoryId: "2",
                    image: productcategoryFour,
                    name: "Refrigrator",
                    price: "1020$",
                    rating: 4.9,
                    origin: "india",
                    description: "fsgert dhf fih sdjf sdhf ",
                },
                {
                    id: "5",
                    productSubCategoryId: "2",
                    image: productcategoryFive,
                    name: "Wearables",
                    price: "900$",
                    rating: 4.9,
                    origin: "india",
                    description: "rwe dhf fih gfsdsdjf sdhf ",
                },
                {
                    id: "6",
                    productSubCategoryId: "3",
                    image: productcategorySix,
                    name: "Other Categories",
                    price: "200$",
                    rating: 4.9,
                    origin: "india",
                    description: "fsdf dhf fihfsd sdjf sdhf ",
                },
                {
                    id: "7",
                    productSubCategoryId: "1",
                    image: productcategorySix,
                    name: "Other Categories",
                    price: "100$",
                    rating: 4.9,
                    origin: "india",
                    description: "hfsdjfsdfsdkfh fsddhf fih sdjf sdhf ",
                },
                {
                    id: "8",
                    productSubCategoryId: "2",
                    image: productcategorySix,
                    name: "Other Categories",
                    price: "1001$",
                    rating: 4.9,
                    origin: "india",
                    description: "fsdg dhf fihfsdfsdjfrgt sdhf ",
                },
                {
                    id: "9",
                    productSubCategoryId: "1",
                    image: productcategoryFour,
                    name: "Refrigrator",
                    price: "123$",
                    rating: 4.9,
                    origin: "india",
                    description: "fsd dhf fih sdjf sdhf ",
                },
            ],
            // layer 1
            productSubCategoryView: null,
            // layer 2
            SubcategoryItemsView: null,
            // layer 3
            itemDetails: null,

            lastSubcategoryId: null,
            lastProductSubcategoryId: null,
        };
    },
    mounted() {
        this.openSubcategory("1");
    },
    methods: {
        // for rendering diffrent sections

        // 1st layer

        openSubcategory(categoryId) {
            this.currenView = "productSubcategory";
            this.productSubCategoryView = this.productSubCategoryData.filter(
                (product) => product.productCategoryId === categoryId
            );
            this.lastSubcategoryId = categoryId;
        },
        // 2nd layer

        openSubcategoryProducts(productSubCategoryId) {
            this.currenView = "subcategoryItemList";
            this.SubcategoryItemsView = this.SubcategoryItemsData.filter(
                (item) => item.productSubCategoryId === productSubCategoryId
            );
            this.lastProductSubcategoryId = productSubCategoryId;
        },

        //3rd layer

        productDetail(itemId) {
            this.currenView = "item";
            this.itemDetails = this.SubcategoryItemsData.filter(
                (item) => item.id === itemId
            );
        },

        // for back buttons in diffrent sections

        goToSubcategory() {
            this.openSubcategory(this.lastSubcategoryId);
        },
        gotToProductCategory() {
            this.openSubcategoryProducts(this.lastProductSubcategoryId);
        },
    },
};
</script>

<style scoped>
.appHeader {
    position: relative;
}
.appSidebar {
    width: 250px;
    margin: 0;
}
.app-content-right {
    padding: 1rem;
}
.app-data-container {
    display: flex;
    flex-direction: row;
}
</style>
