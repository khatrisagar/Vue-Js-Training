<template>
    <div class="login-wrapper">
        <form @submit.prevent="onLogin">
            <div class="form-container">
                <div class="form-element">
                    <label class="form-label" for="user-name">Username</label>
                    <input
                        class="form-input"
                        type="text"
                        id="user-name"
                        v-model="userName"
                    />
                </div>
                <div class="form-element">
                    <label class="form-label" for="user-password"
                        >Password</label
                    >
                    <input
                        id="user-password"
                        class="form-input"
                        type="password"
                        v-model="userPassword"
                    />
                </div>
                <div class="form-element">
                    <button>Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: null,
            userPassword: null,
        };
    },
    methods: {
        onLogin() {
            if (this.userName === "sagar" && this.userPassword === "1234") {
                this.$router.push({ name: "friends" });
                localStorage.setItem("user_at", JSON.stringify({ id: 1 }));
            } else if (
                this.userName === "dhyey" &&
                this.userPassword === "1234"
            ) {
                this.$router.push({ name: "friends" });
                localStorage.setItem("user_at", JSON.stringify({ id: 2 }));
            } else if (
                this.userName === "kaushal" &&
                this.userPassword === "1234"
            ) {
                this.$router.push({ name: "friends" });
                localStorage.setItem("user_at", JSON.stringify({ id: 3 }));
            } else if (
                this.userName === "jay" &&
                this.userPassword === "1234"
            ) {
                this.$router.push({ name: "friends" });
                localStorage.setItem("user_at", JSON.stringify({ id: 4 }));
            } else if (
                this.userName === "ravi" &&
                this.userPassword === "1234"
            ) {
                this.$router.push({ name: "friends" });
                localStorage.setItem("user_at", JSON.stringify({ id: 5 }));
            } else {
                this.$router.push({ name: "login" });
            }
        },
    },
};
</script>

<style scoped>
.login-wrapper {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.form-container {
    box-shadow: 0px 0px 3px black;
    width: 400px;
    padding: 2rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.form-element {
    display: flex;
    flex-direction: column;
}
</style>
