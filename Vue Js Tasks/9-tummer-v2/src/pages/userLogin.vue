<template>
    <div class="login-wrapper">
        <form @submit.prevent="onLogin">
            <div class="form-container">
                <div class="form-element">
                    <h2 class="form-heading">Login</h2>
                    <hr class="line" />
                </div>
                <div class="form-element">
                    <label class="form-label" for="user-email">Email</label>
                    <input
                        class="form-input"
                        id="user-email"
                        type="text"
                        v-model="userEmail"
                    />
                </div>
                <div class="form-element">
                    <label class="form-label" for="user-password"
                        >Password</label
                    >
                    <input
                        class="form-input"
                        id="user-password"
                        type="password"
                        v-model="userPassword"
                    />
                </div>
                <div class="form-element">
                    <p class="">
                        Doesn't have account
                        <router-link to="/signup">SignUp</router-link>
                        Now
                    </p>
                </div>
                <div class="form-element">
                    <button class="primary-button">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { getUsers } from "@/utils/helpers/getUsers";
export default {
    data() {
        return {
            userEmail: null,
            userPassword: null,
        };
    },
    methods: {
        onLogin() {
            const users = getUsers();
            let isProductExist = false;
            let loggedInUser;
            for (let user of users) {
                if (
                    user.email === this.userEmail &&
                    this.userPassword === this.userPassword
                ) {
                    loggedInUser = users.find(
                        (registerUser) => registerUser.id == user.id
                    );

                    localStorage.setItem(
                        "user_at",
                        JSON.stringify({ userId: user.id })
                    );
                    this.$store.dispatch("auth/setLogin");
                }
            }

            this.$store.getters["getCartData"].forEach((cartProduct) => {
                if (loggedInUser.cart.length) {
                    isProductExist = false;
                    loggedInUser.cart.forEach((loggedInUserCartProduct) => {
                        if (cartProduct.id === loggedInUserCartProduct.id) {
                            isProductExist = true;
                            loggedInUserCartProduct.quantity +=
                                cartProduct.quantity;
                        }
                    });
                    if (!isProductExist) {
                        loggedInUser.cart.push(cartProduct);
                        isProductExist = false;
                    }
                } else {
                    loggedInUser.cart.push(cartProduct);
                }
            });
            localStorage.setItem("users", JSON.stringify(users));
            this.$router.push({ name: "home" });
        },
    },
};
</script>

<style scoped>
.login-wrapper {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    background-color: var(--primary-color);
}

.form-input {
    height: 1.5rem;
}
a {
    color: var(--primary-color);
}
.line {
    width: 40px;
    background-color: black;
    border: none;
    height: 2px;
}

/* form-elements */
.form-container {
    box-shadow: 0px 0px 3px rgb(78, 78, 78);
    border-radius: 4px;
    padding: 3rem;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--white);
}
.form-heading {
    color: var(--primary-color);
}
.form-element {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.form-label {
    font-weight: 600;
    color: var(--primary-color);
}
</style>
