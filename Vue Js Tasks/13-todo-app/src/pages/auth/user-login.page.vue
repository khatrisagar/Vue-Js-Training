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
                        Doesn't have accout
                        <router-link to="/signup">SignUp</router-link> Now
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
export default {
    data() {
        return {
            userEmail: null,
            userPassword: null,
        };
    },
    methods: {
        onLogin() {
            console.log("loginnnnnn");
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
</style>
