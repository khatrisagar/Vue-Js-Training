<template>
    <header>
        <div class="header-wrapper container">
            <div class="header-left">
                <router-link :to="{ name: 'home' }">
                    <img
                        :src="require('@/assets/brand-logo.svg')"
                        alt="brand logo"
                    />
                </router-link>
            </div>

            <div class="header-right">
                <div v-if="!isUserLogin">
                    <router-link :to="{ name: 'login' }">
                        <HeaderBtn border icon="fa fa-user"></HeaderBtn>
                    </router-link>
                </div>
                <div v-if="isUserLogin" class="after-login">
                    <HeaderBtn
                        border
                        icon="fa fa-sign-out fa-2xl"
                        @click="logoutUser"
                    ></HeaderBtn>
                </div>
                <div>
                    <HeaderBtn
                        border
                        icon="fa fa-cart-shopping"
                        @click="isCartVisible"
                    ></HeaderBtn>
                </div>

                <div v-if="isUserLogin">
                    <router-link :to="{ name: 'orderHistory' }">
                        <HeaderBtn border icon="fa fa-history"></HeaderBtn>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
    <div class="cart" v-if="isCartPopUp">
        <cartPopUp @closePopUp="closePopUp" />
    </div>
</template>

<script>
import cartPopUp from "@/components/cartPopUp.vue";
import moment from "moment";
import { getProducts, resetProductSale } from "@/utils/helpers/getProducts";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        cartPopUp,
    },
    mounted() {
        const saleData = JSON.parse(localStorage.getItem("sale")) ?? null;
        let saleDataObject = {};
        if (saleData) {
            saleDataObject = {
                isSaleRunning: saleData.isSaleRunning,
                saleStartTime: saleData.saleStartTime,
                saleEndTime: saleData.saleEndTime,
            };
        } else {
            saleDataObject = {
                isSaleRunning: true,
                saleStartTime: moment(),
                saleEndTime: moment().minute(moment().minute() + 5),
            };

            resetProductSale();
            const randomValueArray = Array(5)
                .fill()
                .map(() => Math.floor(Math.random() * getProducts().length));
            const products = getProducts();
            products.forEach((product) => {
                if (randomValueArray.includes(product.id)) {
                    product.isSale = true;
                }
            });
            localStorage.setItem("products", JSON.stringify(products));
        }

        this.setStartSale(saleDataObject);
        localStorage.setItem("sale", JSON.stringify(this.getSaleInformation));
    },
    data() {
        return {
            isCartPopUp: false,
        };
    },
    methods: {
        ...mapActions({
            setLogout: "auth/setLogout",
            clearCart: "clearCart",
            setStartSale: "saleStore/setStartSale",
        }),
        isCartVisible() {
            this.isCartPopUp = !this.isCartPopUp;
        },
        closePopUp() {
            this.isCartVisible();
        },
        logoutUser() {
            localStorage.removeItem("user_at");
            this.clearCart();
            this.setLogout();
        },
    },
    computed: {
        ...mapGetters({
            getSaleInformation: "saleStore/getSaleInformation",
            getIsUserLogin: "auth/getIsUserLogin",
        }),
        isUserLogin() {
            if (this.getIsUserLogin) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>

<style scoped>
header {
    background-color: var(--grey-bg);
}
.header-wrapper {
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.header-right {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
.header-images {
    width: 50px;
}
.cart {
    width: 400px;
    position: absolute;
    right: 2rem;
}
.logout-button,
.view-history {
    border: 1px solid white;
    padding: 0.5rem;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    font-size: 2;
    background-color: transparent;
}
.after-login {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}
</style>
