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
                    <p class="warning" v-if="showLoginWarnings">
                        Invalid Credentials
                    </p>
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
import { setLoggedInCart } from "@/utils/helpers/setLoggedInUserCart";
export default {
    data() {
        return {
            userEmail: null,
            userPassword: null,
            showLoginWarnings: false,
        };
    },
    methods: {
        onLogin() {
            const users = getUsers();
            for (let user of users) {
                if (
                    user.email === this.userEmail &&
                    user.password === this.userPassword
                ) {
                    localStorage.setItem(
                        "user_at",
                        JSON.stringify({ userId: user.id })
                    );

                    this.$store.dispatch("auth/setLogin");
                    setLoggedInCart();
                    this.$router.push({ name: "home" });
                } else {
                    this.showLoginWarnings = true;
                }
            }
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
