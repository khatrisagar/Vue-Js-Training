<template>
    <appHeader class="appHeader" />
    <div class="app-data-container container">
        <appSidebar
            class="appSidebar"
            :productCategoryData="productCategoryData"
            @openSubcategory="openSubcategory"
        />

        <div class="app-content-right">
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

            <div
                :style="{
                    display:
                        currenView === 'subcategoryItemList' ? 'block' : 'none',
                }"
            >
                <subcategoryItemList
                    :SubcategoryItemsData="SubcategoryItemsView"
                    @viewItem="viewItem"
                />
            </div>
            <div
                :style="{
                    display: currenView === 'item' ? 'block' : 'none',
                }"
            >
                <viewItem :itemDetails="itemDetails" />
            </div>
        </div>
    </div>
    <appFooter />
</template>

<script>
import appHeader from "../Layout/appHeader.vue";
import appSidebar from "../Layout/appSidebar.vue";
import productSubcategory from "../Layout/productSubcategory.vue";
import subcategoryItemList from "../Layout/subcategoryItemList.vue";
import viewItem from "../Layout/viewItem.vue";
import appFooter from "../Layout/appFooter.vue";

import productcategoryOne from "../../assets/asset 7.png";
import productcategoryTwo from "../../assets/asset 8.png";
import productcategoryThree from "../../assets/asset 9.png";
import productcategoryFour from "../../assets/asset 10.png";
import productcategoryFive from "../../assets/asset 11.png";
import productcategorySix from "../../assets/asset 12.png";

export default {
    components: {
        appHeader,
        appSidebar,
        productSubcategory,
        subcategoryItemList,
        viewItem,
        appFooter,
    },
    data() {
        return {
            currenView: null,
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
                    productCategoryName: "Computers and Tablets",
                },
                {
                    productSubCategoryId: "3",
                    productCategoryId: "1",
                    productCategoryImage: productcategoryThree,
                    productCategoryName: "Home Appliences",
                },
                {
                    productSubCategoryId: "4",
                    productCategoryId: "2",
                    productCategoryImage: productcategoryFour,
                    productCategoryName: "Refrigrator",
                },
                {
                    productSubCategoryId: "5",
                    productCategoryId: "2",
                    productCategoryImage: productcategoryFive,
                    productCategoryName: "Wearables",
                },
                {
                    productSubCategoryId: "6",
                    productCategoryId: "3",
                    productCategoryImage: productcategorySix,
                    productCategoryName: "Other Categories",
                },
                {
                    productSubCategoryId: "7",
                    productCategoryId: "1",
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
                    productCategoryId: "1",
                    productCategoryImage: productcategoryFour,
                    productCategoryName: "Refrigrator",
                },
            ],

            SubcategoryItemsData: [
                {
                    id: "1",
                    productSubCategoryId: "1",
                    image: productcategoryOne,
                    name: "Television",
                    price: "100$",
                    description: "hfsdjkfh dhf fih sdjf sdhf ",
                },
                {
                    id: "2",
                    productCategoryId: "1",
                    image: productcategoryTwo,
                    name: "Computers and Tablets",
                    price: "10$",
                    description: "hfsdjgrwegkfh dhf fih sdjf sdhf ",
                },
                {
                    id: "3",
                    productCategoryId: "1",
                    image: productcategoryThree,
                    name: "Home Appliences",
                    price: "200$",
                    description: "hrwfed dhf fih das sdhf ",
                },
                {
                    id: "4",
                    productSubCategoryId: "2",
                    image: productcategoryFour,
                    name: "Refrigrator",
                    price: "1020$",
                    description: "fsgert dhf fih sdjf sdhf ",
                },
                {
                    id: "5",
                    productSubCategoryId: "2",
                    image: productcategoryFive,
                    name: "Wearables",
                    price: "900$",
                    description: "rwe dhf fih gfsdsdjf sdhf ",
                },
                {
                    id: "6",
                    productSubCategoryId: "3",
                    image: productcategorySix,
                    name: "Other Categories",
                    price: "200$",
                    description: "fsdf dhf fihfsd sdjf sdhf ",
                },
                {
                    id: "7",
                    productSubCategoryId: "1",
                    image: productcategorySix,
                    name: "Other Categories",
                    price: "100$",
                    description: "hfsdjfsdfsdkfh fsddhf fih sdjf sdhf ",
                },
                {
                    id: "8",
                    productSubCategoryId: "2",
                    image: productcategorySix,
                    name: "Other Categories",
                    price: "1001$",
                    description: "fsdg dhf fihfsdfsdjfrgt sdhf ",
                },
                {
                    id: "9",
                    productSubCategoryId: "1",
                    image: productcategoryFour,
                    name: "Refrigrator",
                    price: "123$",
                    description: "fsd dhf fih sdjf sdhf ",
                },
            ],
            productSubCategoryView: null,
            SubcategoryItemsView: null,
            itemDetails: null,
        };
    },
    methods: {
        openSubcategory(categoryId) {
            this.currenView = "productSubcategory";
            this.productSubCategoryView = this.productSubCategoryData.filter(
                (product) => product.productCategoryId === categoryId
            );
        },
        openSubcategoryProducts(productSubCategoryId) {
            this.currenView = "subcategoryItemList";
            this.SubcategoryItemsView = this.SubcategoryItemsData.filter(
                (item) => item.productSubCategoryId === productSubCategoryId
            );
        },
        viewItem(itemId) {
            this.currenView = "item";
            this.itemDetails = this.SubcategoryItemsData.filter(
                (item) => item.id === itemId
            );
            console.log(this.itemDetails);
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 1170px;
    margin: 0 auto;
    padding: 1rem 0;
}
</style>

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
