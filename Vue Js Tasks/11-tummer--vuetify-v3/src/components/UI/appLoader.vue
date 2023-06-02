<template>
    <div class="loader-container">
        <div class="box"></div>
    </div>
</template>

<style scoped>
.loader-container {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: #00000098;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    width: 50px;
    height: 50px;
    background-color: aqua;
    /* transition: 0.3s ease-in-out; */
    animation: loader 2s normal infinite;
}
@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    25% {
        scale: 1.2;
        background-color: #2142ff;
    }
    50% {
        border-radius: 50%;
        background-color: #600aff;
        transform: rotate(180deg);
    }
    75% {
        scale: 0.7;
        background-color: #0aff70;
    }
    100% {
        border-radius: 8px;
        background-color: aqua;
        transform: rotate(360deg);
    }
}
</style>
