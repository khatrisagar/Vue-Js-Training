<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Counter- {{ $store.state.counter }}</h2>
    <button @click="increaseCounter">Counter++</button>
    <button @click="decreaseCounter">Counter--</button>
    {{ this.$store.getters.doubleTheCounter }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "App",
    components: {},
    methods: {
        increaseCounter() {
            // this.$store.state.counter++;

            //commit take an name of the mutation
            // this.$store.commit("increment", 10);

            // to use an action from the component
            this.$store.dispatch("increment", 10);
        },
        decreaseCounter() {
            this.$store.state.counter--;
        },

        // ...mapActions(['incrememt']),
    },
    computed: {
        // it will point to a doubleTheCounter method
        ...mapGetters(["doubleTheCounter"]),
    },
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
</style>
