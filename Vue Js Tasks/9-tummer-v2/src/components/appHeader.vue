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
            <div v-if="saleTimer !== 0">Sale Ends In: {{ saleTimer }}</div>
            <div v-if="saleTimer === 0">Sale Ended</div>
            <div class="header-right">
                <div v-if="!isUserLogin">
                    <router-link :to="{ name: 'login' }">
                        <img
                            class="header-images"
                            :src="require('@/assets/user-profile.svg')"
                            alt="user profile"
                        />
                    </router-link>
                </div>
                <div>
                    <img
                        class="header-images"
                        :src="require('@/assets/cart.svg')"
                        alt="user cart"
                        @click="isCartVisible"
                    />
                </div>
                <div v-if="isUserLogin" class="after-login">
                    <button class="logout-button" @click="logoutUser">
                        Logout
                    </button>
                    <router-link :to="{ name: 'orderHistory' }">
                        <i class="fa fa-history"></i
                    ></router-link>
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
import { resetProductSale } from "@/utils/helpers/getProducts";

export default {
    components: {
        cartPopUp,
    },
    mounted() {
        this.$store.dispatch("saleStore/setStartSale");
        this.setSaleTimer();
    },
    data() {
        return {
            isCartPopUp: false,

            saleTimer: 0,
        };
    },
    methods: {
        isCartVisible() {
            this.isCartPopUp = !this.isCartPopUp;
        },
        closePopUp() {
            this.isCartVisible();
        },
        logoutUser() {
            localStorage.removeItem("user_at");
            this.$store.dispatch("clearCart");
            this.$store.dispatch("auth/setLogout");
        },
        setSaleTimer() {
            const saleEndTime = this.$store.getters["saleStore/getSaleEndTime"];
            const interval = setInterval(() => {
                this.saleTimer = Math.floor(
                    moment
                        .duration(moment(saleEndTime).diff(moment()))
                        .as("second")
                );
                if (this.saleTimer <= 0) {
                    clearInterval(interval);
                    resetProductSale();
                    this.$store.dispatch("saleStore/setEndSale");
                    localStorage.removeItem("sale");
                }
            }, 1000);
        },
    },
    computed: {
        isUserLogin() {
            if (this.$store.state.auth.isUserLogin) {
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
.logout-button {
    box-shadow: var(--bg-shadow);
    width: 80px;
    height: 30px;
}
.after-login {
    display: flex;
    gap: 1rem;
}
</style>
