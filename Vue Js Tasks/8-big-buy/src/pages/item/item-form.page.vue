<template>
  <div v-if="!isLoaderVisible && isDataExist">
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent ref="form">
        <!-- <v-text-field v-model="" :rules="" label="Email"></v-text-field> -->
        <v-text-field
          label="Item Name"
          v-model.trim="item.name"
          :rules="getItemFormValidation.itemNameRules"
        ></v-text-field>
        <v-text-field
          label="Item Description"
          v-model.trim="item.details.description"
          :rules="getItemFormValidation.itemDescriptionRules"
        ></v-text-field>
        <v-text-field
          label="Item Price"
          v-model.number="item.details.price"
          :rules="getItemFormValidation.itemPriceRules"
        ></v-text-field>
        <v-text-field
          label="Item Minimum Price"
          v-model.number="item.details.minPrice"
          :rules="getItemFormValidation.itemMinPriceRules"
        ></v-text-field>
        <v-text-field
          label="Item Maximum Price"
          v-model.number="item.details.maxPrice"
          :rules="getItemFormValidation.itemMaxPriceRules"
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
  <div v-if="!isDataExist">No data Found</div>
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
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

// services
import { createItemService, editItemService } from "@/services";
// helpers
import { setSellerItem } from "@/utils";
// validation
import { itemFormValidation } from "@/validations";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const form = ref(null);

    const isDataExist = ref(false);

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

    const setInitialLoad = async () => {
      const itemId = route.params.itemId;
      if (itemId) {
        isEditMode.value = true;
      } else {
        isEditMode.value = false;
        isDataExist.value = true;
      }

      if (isEditMode.value) {
        await setSellerItem();
        const allSellerItems = store.getters["item/getSellerItemState"];
        const sellerItem = allSellerItems.find((item) => item._id === itemId);
        if (sellerItem) {
          isDataExist.value = true;
          item.value = JSON.parse(JSON.stringify(sellerItem));
        } else {
          isDataExist.value = false;
        }
      } else {
        item.value = JSON.parse(JSON.stringify(initialState.value));
      }
    };
    (async () => {
      try {
        store.dispatch("loader/addLoaderState");
        await setInitialLoad(route);
        store.dispatch("loader/removeLoaderState");
      } catch (error) {
        console.log(error);
      }
    })();

    // methods
    const onCreateItem = async () => {
      try {
        const { valid } = await form.value.validate();
        if (valid) {
          const createdItem = await createItemService(item.value);
          const sellerItems = store.getters["item/getSellerItemState"];
          if (!sellerItems.length) {
            await setSellerItem();
          }
          sellerItems.push(createdItem.data.data);
          item.value = JSON.parse(JSON.stringify(initialState.value));

          router.push({ name: "viewItem" });
        }
      } catch (error) {
        console.log(error);
      }
    };

    const onEditItem = async () => {
      try {
        const { valid } = await form.value.validate();
        if (valid) {
          console.log(item.value.details.description);
          await editItemService(route.params.itemId, item.value);
          const sellerItems = store.getters["item/getSellerItemState"];
          const editedItemIndex = sellerItems.findIndex(
            (editedItem) => editedItem.id === route.params.itemId
          );
          sellerItems.splice(editedItemIndex, 1, item.value);

          item.value = JSON.parse(JSON.stringify(initialState.value));
          router.push({ name: "viewItem" });
        }
      } catch (error) {
        console.log(error);
      }
    };

    // computed
    const isLoaderVisible = computed(() => {
      return store.getters["loader/getLoaderState"];
    });
    const getItemFormValidation = computed(() => {
      return itemFormValidation;
    });

    // watcher
    watch(route, (newRoute) => {
      setInitialLoad(newRoute);
    });

    return {
      item,
      form,
      initialState,
      isEditMode,
      isDataExist,
      onCreateItem,
      onEditItem,
      setInitialLoad,
      isLoaderVisible,
      getItemFormValidation,
    };
  },
};
</script>
