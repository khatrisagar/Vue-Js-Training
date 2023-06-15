<template>
  <div v-if="!isLoaderVisible">
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent ref="form">
        <!-- <v-text-field v-model="" :rules="" label="Email"></v-text-field> -->
        <v-text-field label="Item Name" v-model="item.name"></v-text-field>
        <v-text-field
          label="Item Description"
          v-model="item.details.description"
        ></v-text-field>
        <v-text-field
          label="Item Price"
          v-model="item.details.price"
        ></v-text-field>
        <v-text-field
          label="Item Minimum Price"
          v-model="item.details.minPrice"
        ></v-text-field>
        <v-text-field
          label="Item Maximum Price"
          v-model="item.details.maxPrice"
        ></v-text-field>

        <p v-if="showLoginError" class="text-red">Invalid Email Or Password</p>
        <v-btn
          type="submit"
          v-if="!isEditMode"
          @click="onCreateItem"
          block
          class="mt-2"
          >Create Item</v-btn
        >
        <v-btn
          type="submit"
          v-if="isEditMode"
          @click="onEditItem"
          block
          class="mt-2"
          >Edit Item</v-btn
        >
      </v-form>
    </v-sheet>
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
import { ref, watch, computed, onBeforeMount } from "vue";

// services
import { createItemService, editItemService } from "@/services";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    let item = ref({
      name: null,
      details: {
        description: null,
        price: null,
        minPrice: null,
        maxPrice: null,
      },
    });
    let initialState = ref({});
    const isEditMode = ref(false);

    //  created

    initialState.value = JSON.parse(JSON.stringify(item.value));
    // on load

    const setInitialLoad = () => {
      const itemId = route.params.itemId;
      if (itemId) {
        isEditMode.value = true;
      } else {
        isEditMode.value = false;
      }

      if (isEditMode.value) {
        const allSellerItems = store.getters["item/getSellerItemState"];
        const sellerItem = allSellerItems.find((item) => item._id === itemId);
        item.value = JSON.parse(JSON.stringify(sellerItem));
      } else {
        item.value = JSON.parse(JSON.stringify(initialState.value));
      }
    };
    onBeforeMount(async () => {
      store.dispatch("loader/addLoaderState");
      setInitialLoad(route);
      await store.dispatch("loader/removeLoaderState");
    });

    // methods
    const onCreateItem = async () => {
      try {
        const createItemData = {
          name: item.value.name,
          details: {
            description: item.value.details.description,
            price: parseInt(item.value.details.price),
            minPrice: parseInt(item.value.details.minPrice),
            maxPrice: parseInt(item.value.details.maxPrice),
          },
        };
        await createItemService(createItemData);
        item.value = JSON.parse(JSON.stringify(initialState.value));
        router.push();
      } catch (error) {
        console.log(error);
      }
    };

    const onEditItem = async () => {
      await editItemService(route.params.itemId, {
        name: item.value.name,
        details: {
          description: item.value.details.description,
          price: parseInt(item.value.details.price),
          minPrice: parseInt(item.value.details.minPrice),
          maxPrice: parseInt(item.value.details.maxPrice),
        },
      });
      item.value = JSON.parse(JSON.stringify(initialState.value));
      router.push({ name: "viewItem" });
    };

    // computed
    const isLoaderVisible = computed(() => {
      return store.getters["loader/getLoaderState"];
    });

    // watcher
    watch(route, (newRoute) => {
      setInitialLoad(newRoute);
    });

    return {
      item,
      initialState,
      isEditMode,
      onCreateItem,
      onEditItem,
      setInitialLoad,
      isLoaderVisible,
    };
  },
};
</script>
