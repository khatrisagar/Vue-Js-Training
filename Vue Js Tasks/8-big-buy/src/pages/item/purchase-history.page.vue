<template>
  <div v-if="!isLoaderVisible && isDataExist">
    <commonTable :items="purchasedItems" pageMode="purchaseHistory" />
  </div>
  <div
    v-if="!isLoaderVisible && !isDataExist"
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
    const isDataExist = ref(false);
    const store = useStore();

    onBeforeMount(async () => {
      try {
        store.dispatch("loader/addLoaderState");

        const purhaseItems = await getPurchaseItemHistoryService();
        purchasedItems.value = purhaseItems.data.data.map((purchaseItem) => {
          purchaseItem.item.createdAt = purchaseItem.createdAt;
          return purchaseItem.item;
        });
        if (purchasedItems.value.length) {
          isDataExist.value = true;
        } else {
          isDataExist.value = false;
        }
        store.dispatch("loader/removeLoaderState");
      } catch (error) {
        console.log(error);
      }
    });

    const isLoaderVisible = computed(() => {
      return store.getters["loader/getLoaderState"];
    });
    return {
      isDataExist,
      purchasedItems,
      isLoaderVisible,
    };
  },
};
</script>
