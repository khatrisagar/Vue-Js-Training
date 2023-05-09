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
};
</script>

<style scoped>
header {
    background-color: black;
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
</style>
