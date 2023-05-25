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
                <router-link :to="{ name: 'login' }">
                    <img
                        class="header-images"
                        :src="require('@/assets/user-profile.svg')"
                        alt="user profile"
                    />
                </router-link>
                <img
                    class="header-images"
                    :src="require('@/assets/cart.svg')"
                    alt="user cart"
                    @click="isCartVisible"
                />
                <router-link :to="{ name: 'orderHistory' }">
                    <i class="fa fa-history"></i
                ></router-link>
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
</style>
