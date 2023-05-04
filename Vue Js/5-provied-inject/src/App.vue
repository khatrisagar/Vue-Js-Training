<template>
  <provideInject />

  <reusable-card>
    <template v-slot:card>
      <div>
        <h1>Hello This is from card</h1>
      </div>
    </template>
  </reusable-card>
</template>

<script>
import provideInject from "./components/provideInject.vue";
import Reusablecard from "./components/ReusableCard.vue";
export default {
  name: "App",
  components: {
    provideInject,
    "reusable-card": Reusablecard,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "sagar",
          age: 20,
        },
      ],
    };
  },
  provide() {
    return {
      users: this.users,

      onclick: function (userId) {
        console.log("called onclick");
        const user = this.users.find((user) => user.id === userId);
        user.age++;
      },
    };
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
