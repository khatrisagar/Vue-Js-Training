<template>
  <div v-if="!isLoaderVisible">
    <v-sheet class="d-flex pa-6 w-100 flex-wrap">
      <commonCard
        class="ml-4 mt-4"
        v-for="item in allItems"
        :key="item._id"
        :item="item"
        @toggleAlert="toggleAlert"
      />
    </v-sheet>
    <v-overlay v-model="isWarning"></v-overlay>
    <v-container>
      <v-snackbar v-model="isWarning">
        Item Successfully Purchased
        <template v-slot:actions>
          <v-btn color="blue" variant="text" @click="isWarning = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
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
import commonCard from "@/components/common/common-card.component.vue";
import { onBeforeMount, computed, ref } from "vue";
import { useStore } from "vuex";
// services
import { getAllItemService } from "@/services";
// helpers
import { setSellerItem } from "@/utils";

export default {
  components: {
    commonCard,
  },
  setup() {
    const isWarning = ref(false);
    const store = useStore();
    const allItems = ref([]);

    onBeforeMount(async () => {
      store.dispatch("loader/addLoaderState");
      const items = await Promise.all([getAllItemService(), setSellerItem()]);
      allItems.value = items[0].data.data;
      store.dispatch("loader/removeLoaderState");
    });

    // methods
    const toggleAlert = () => {
      isWarning.value = true;

      setTimeout(() => {
        isWarning.value = false;
      }, 3000);
    };

    // computed
    const isLoaderVisible = computed(() => {
      return store.getters["loader/getLoaderState"];
    });
    return {
      allItems,
      isWarning,
      toggleAlert,
      isLoaderVisible,
    };
  },
};
</script>
