<template>
    <main>
        <router-link to="/home">Home</router-link>
        <router-link to="/test">Test</router-link>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.router-link-active {
    color: white;
    padding: 4px 6px;
    background-color: blue;
    border-radius: 4px;
}
</style>
