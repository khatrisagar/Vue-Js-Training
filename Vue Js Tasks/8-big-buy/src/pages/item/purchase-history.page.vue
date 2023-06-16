<template>
  <div v-if="!isLoaderVisible">
    <commonTable :items="purchasedItems" pageMode="purchaseHistory" />
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
import { getPurchaseItemHistoryService, getAllItemService } from "@/services";
export default {
  components: {
    commonTable,
  },
  setup() {
    const purchasedItems = ref(null);
    const store = useStore();

    onBeforeMount(async () => {
      store.dispatch("loader/addLoaderState");

      const itemsData = await Promise.all([
        getPurchaseItemHistoryService(),
        getAllItemService(),
      ]);

      purchasedItems.value = itemsData[0].data.data.map((purchaseItem) => {
        return JSON.parse(
          JSON.stringify(
            itemsData[1].data.data.find((item) => {
              if (item.id === purchaseItem.item) {
                item.details.price = purchaseItem.purchasePrice;
                item.createdAt = purchaseItem.createdAt;
                return item;
              }
            })
          )
        );
      });
      store.dispatch("loader/removeLoaderState");
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
