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
                        <img
                            class="header-images"
                            :src="require('@/assets/user-profile.svg')"
                            alt="user profile"
                        />
                    </router-link>
                </div>
                <div v-if="isUserLogin" class="after-login">
                    <button class="logout-button" @click="logoutUser">
                        <i
                            class="fa fa-sign-out fa-2xl"
                            style="color: white"
                        ></i>
                    </button>
                </div>
                <div>
                    <img
                        class="header-images"
                        :src="require('@/assets/cart.svg')"
                        alt="user cart"
                        @click="isCartVisible"
                    />
                </div>
                <div v-if="isUserLogin" class="view-history after-login">
                    <router-link :to="{ name: 'orderHistory' }">
                        <i class="fa fa-history fa-lg" style="color: white"></i
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

export default {
    components: {
        cartPopUp,
    },
    mounted() {
        this.$store.dispatch("saleStore/setStartSale");
    },
    data() {
        return {
            isCartPopUp: false,
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
    },
    computed: {
        isUserLogin() {
            if (this.$store.getters["auth/getIsUserLogin"]) {
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
