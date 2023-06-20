<template>
  <div v-if="!isLoaderVisible && getSellerItems.length">
    <commonTable :items="getSellerItems" pageMode="viewItems" />
  </div>
  <div
    v-if="!isLoaderVisible && !getSellerItems.length"
    style="min-height: 300px"
    class="d-flex justify-center align-center"
  >
    <p class="text-h3 font-weight-bold">No Items Available</p>
  </div>
  <div class="d-flex justify-center align-center">
    <v-progress-circular
      indeterminate
      :size="95"
      :width="10"
      v-if="isLoaderVisible"
    ></v-progress-circular>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

// components
import commonTable from "@/components/common/common-tabel.component.vue";
// helpers
import { setSellerItem } from "@/utils";

export default {
  components: {
    commonTable,
  },
  setup() {
    const store = useStore();

    (async () => {
      try {
        store.dispatch("loader/addLoaderState");
        await setSellerItem();
        store.dispatch("loader/removeLoaderState");
      } catch (error) {
        console.log(error);
      }
    })();

    const getSellerItems = computed(() => {
      return store.getters["item/getSellerItemState"];
    });
    const isLoaderVisible = computed(() => {
      return store.getters["loader/getLoaderState"];
    });

    return {
      // computed
      getSellerItems,
      isLoaderVisible,
    };
  },
};
</script>
