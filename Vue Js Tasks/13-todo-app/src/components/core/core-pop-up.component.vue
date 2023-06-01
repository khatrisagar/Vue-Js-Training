<template>
    <div class="pop-up-wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>
.pop-up-wrapper {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.377);
}
.pop-up-container {
    border: 1px solid black;
}
</style>
