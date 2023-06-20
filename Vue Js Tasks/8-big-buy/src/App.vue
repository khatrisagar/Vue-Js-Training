<template>
  <nav>
    <appHeader />
  </nav>
  <router-view />
</template>

<script>
// components
import appHeader from "@/components/common/app-header.component.vue";
// helper
import { setLoggedInUserToState } from "@/utils/";

export default {
  components: {
    appHeader,
  },
  setup() {
    (async () => {
      try {
        await setLoggedInUserToState();
      } catch (error) {
        console.log(error);
      }
    })();

    return {};
  },
};
</script>
