<template>
  <div v-if="!isLoaderVisible">
    <commonTable :items="purchasedItems" />
  </div>
  <div style="height: 100vh" class="d-flex justify-center align-center">
    <v-progress-circular
      indeterminate
      :size="95"
      :width="10"
      v-if="isLoaderVisible"
    ></v-progress-circular>
  </div>
</template>

<script>
import commonTable from "@/components/common/common-tabel.component.vue";
import { computed, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { getPurchaseItemHistoryService } from "@/services";

export default {
  components: {
    commonTable,
  },
  setup() {
    const purchasedItems = ref(null);
    const store = useStore();

    const getPurchasedItems = async () => {
      const purhchaseHistory = await getPurchaseItemHistoryService();
      console.log(purhchaseHistory.data.data);
      return purhchaseHistory.data.data;
    };
    onBeforeMount(async () => {
      store.dispatch("loader/addLoaderState");
      purchasedItems.value = await getPurchasedItems();
      await store.dispatch("loader/removeLoaderState");
    });

    const isLoaderVisible = computed(() => {
      return store.getters["loader/getLoaderState"];
    });
    return {
      purchasedItems,
      isLoaderVisible,
    };
  },
};
</script>
