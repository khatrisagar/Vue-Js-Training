<template>
  <div v-if="!isLoaderVisible">
    <div class="table-wrapper">
      <v-table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Minimum Price</th>
            <th>Maximum Price</th>
            <th>Created Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getSellerItems" :key="item._id">
            <td>{{ item.name }}</td>
            <td>{{ item.details.description }}</td>
            <td>{{ item.details.price }}</td>
            <td>{{ item.details.minPrice }}</td>
            <td>{{ item.details.maxPrice }}</td>
            <td>{{ new Date(item.createdAt).toLocaleDateString() }}</td>
            <td><V-btn @click="onEditItem(item._id)">Edit</V-btn></td>
          </tr>
        </tbody>
      </v-table>
    </div>
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
import { computed, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";

// components

// services
import { getSellerItemsService } from "@/services";
import router from "@/router";

export default {
  setup() {
    const store = useStore();

    onBeforeMount(async () => {
      store.dispatch("loader/addLoaderState");
      const allSellerItem = async () => {
        try {
          const sellerItems = await getSellerItemsService();
          return sellerItems.data.data;
        } catch (error) {
          console.log(error);
        }
      };
      await store.dispatch("item/setSellerItemToState", await allSellerItem());
      await store.dispatch("loader/removeLoaderState");
    });

    const getSellerItems = computed(() => {
      return store.getters["item/getSellerItemState"];
    });
    const isLoaderVisible = computed(() => {
      return store.getters["loader/getLoaderState"];
    });

    // methods
    const onEditItem = (itemId) => {
      router.push({ name: "editItem", params: { itemId: itemId } });
    };
    // computed

    return {
      // computed
      getSellerItems,
      isLoaderVisible,

      onEditItem,
    };
  },
};
</script>
