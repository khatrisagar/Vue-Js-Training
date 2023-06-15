<template>
  <v-toolbar color="primary d-flex flex-column" app>
    <v-toolbar-title class="head font-weight-black text-h5"
      >Big Buy</v-toolbar-title
    >
    <v-toolbar-items class="hidden-xs-only">
      <router-link
        class="text-decoration-none d-flex align-items-center"
        :to="{ name: 'createItem' }"
      >
        <V-Btn class="font-weight-bold"> Add Item </V-Btn>
      </router-link>
      <router-link
        class="text-decoration-none d-flex align-items-center"
        :to="{ name: 'viewItem' }"
      >
        <V-Btn class="font-weight-bold"> View Item </V-Btn>
      </router-link>
      <router-link
        class="text-decoration-none d-flex align-items-center"
        :to="{ name: 'buyItem' }"
      >
        <V-Btn class="font-weight-bold"> Buy Item </V-Btn>
      </router-link>
      <router-link
        class="text-decoration-none d-flex align-items-center"
        :to="{ name: 'purchaseHistroy' }"
      >
        <V-Btn class="font-weight-bold"> Purchase History </V-Btn>
      </router-link>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!getLoggedInUserState.isUserLoggedIn">
      <router-link
        class="text-decoration-none d-flex align-items-center"
        :to="{ name: 'authLogin' }"
      >
        <V-Btn class="font-weight-bold">Login</V-Btn>
      </router-link>
      <router-link
        class="text-decoration-none d-flex align-items-center"
        :to="{ name: 'authSignUp' }"
      >
        <V-Btn class="font-weight-bold"> SignUp </V-Btn>
      </router-link>
    </v-toolbar-items>
    <v-chip label v-if="getLoggedInUserState.isUserLoggedIn">{{
      getLoggedInUserState.loggedInUserName
    }}</v-chip>
    <v-toolbar-items v-if="getLoggedInUserState.isUserLoggedIn">
      <V-btn @click="logoutUser">Logout</V-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    // data
    const store = useStore();
    const router = useRouter();

    // computed
    const getLoggedInUserState = computed(() => {
      return store.getters["user/getLoggedInUserState"];
    });

    // methods
    const logoutUser = () => {
      store.dispatch("user/setLogoutUserState");
      localStorage.removeItem("user");
      localStorage.removeItem("big_buy_at");
      router.push({ name: "authLogin" });
    };

    return {
      // methods
      logoutUser,
      // computed
      getLoggedInUserState,
    };
  },
};
</script>
