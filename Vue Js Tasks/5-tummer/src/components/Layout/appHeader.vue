<template>
    <header>
        <div class="header-section container">
            <div class="right-header">
                <img :src="companyLogo" alt="company logo" />
            </div>
            <div class="left-header">
                <nav class="nav-section">
                    <ul class="nav-link-list">
                        <li>
                            <img
                                :src="profileImg"
                                class="right-header-img-profile"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                :src="cartImg"
                                class="right-header-img-cart"
                                alt=""
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <div class="extra-links">
        <p class="link-btns" @click="currentTab('products')">Products</p>
        <p class="link-btns" @click="currentTab('services')">Services</p>
    </div>
</template>

<script>
import companyLogo from "../../assets/asset 0.svg";
import profileImg from "../../assets/asset 1.svg";
import cartImg from "../../assets/asset 2.svg";
export default {
    data() {
        return {
            companyLogo,
            profileImg,
            cartImg,
        };
    },
    methods: {
        currentTab(view) {
            this.$emit("currentTab", view);
        },
    },
};
</script>

<style scoped>
header {
    background-color: rgb(58, 58, 58);
}
ul {
    list-style: none;
}
.header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.right-header-img-profile,
.right-header-img-cart {
    width: 50px;
    height: 50px;
}

.nav-link-list {
    display: flex;
    column-gap: 2rem;
}
.extra-links {
    background: green;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 1rem;
}
.link-btns {
    color: white;
    margin: 0.4rem;
    cursor: pointer;
}
</style>
