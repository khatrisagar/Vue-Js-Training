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
export default {
    data() {
        return {
            userEmail: null,
            userPassword: null,
            users: [
                {
                    id: 1,
                    email: "test@gmail.com",
                    password: "1234",
                    cart: [],
                    purchaseHistory: [],
                },
                {
                    id: 2,
                    email: "sagar@gmail.com",
                    password: "1234",
                    cart: [],
                    purchaseHistory: [],
                },
                {
                    id: 3,
                    email: "ravi@gmail.com",
                    password: "1234",
                    cart: [],
                    purchaseHistory: [],
                },
            ],
        };
    },
    methods: {
        onLogin() {
            for (let user of this.users) {
                if (user.email === this.userEmail) {
                    if (user.password === this.userPassword) {
                        localStorage.setItem(
                            "user_at",
                            JSON.stringify({ userId: user.id })
                        );
                    } else {
                        return;
                    }
                } else {
                    console.log("bb");
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
