<template>
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
</template>

<script>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";

// services
import { getSellerItemsService } from "@/services";
import router from "@/router";

export default {
  setup() {
    const store = useStore();

    const isUserLoggedIn =
      store.getters["user/getLoggedInUserState"].isUserLoggedIn;

    onBeforeMount(async () => {
      if (isUserLoggedIn) {
        const allSellerItem = async () => {
          try {
            const sellerItems = await getSellerItemsService();
            return sellerItems.data.data;
          } catch (error) {
            console.log(error);
          }
        };
        store.dispatch("item/setSellerItemToState", await allSellerItem());
      }
    });

    const getSellerItems = computed(() => {
      return store.getters["item/getSellerItemState"];
    });

    // methods
    const onEditItem = (itemId) => {
      router.push({ name: "editItem", params: { itemId: itemId } });
    };
    return {
      // computed
      getSellerItems,
      onEditItem,
    };
  },
};
</script>
