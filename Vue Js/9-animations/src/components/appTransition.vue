<template>
    <div class="container">
        <!-- enter-to-class="nameeee" -->
        <transition name="box">
            <div class="box" v-if="isShow"></div>
        </transition>
    </div>
    <button @click="toggleButton">{{ isShow ? "Hide" : "Show" }}</button>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        toggleButton() {
            this.isShow = !this.isShow;
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.box {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: rgb(30, 247, 255);
    transition: 0.3s ease-in;
    /* animation: loader 2s ease-out; */
}
/* 
.box-enter-from {
    animation: loader 2s ease-out;
} */

.box-enter-active {
    animation: loader 2s ease-out;
}

/* .box-enter-to {
}
.box-leave-from {
} */

.box-leave-active {
    transition: 0.3s ease-in;
}

/* .box-leave-to {
} */

@keyframes loader {
    0% {
        transform: rotate(0);
        border-radius: 10px;
    }
    25% {
        border-radius: 25%;
    }
    50% {
        border-radius: 50%;
        transform: rotate(180deg);
        scale: 1.5;
        background-color: rgb(150, 41, 252);
    }
    75% {
        transform: rotate(270deg);
        border-radius: 25%;
    }
    100% {
        transform: rotate(360deg);
        scale: 1;
        border-radius: 10px;
    }
}
</style>
