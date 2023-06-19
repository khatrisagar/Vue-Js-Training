<template>
  <v-card width="300" class="pa-2">
    <v-card-text>
      <p class="text-h5 text--primary">{{ item.name }}</p>
      <div class="text--primary mt-3">
        {{ item.details.description }}
      </div>
      <p class="mt-3">Price- {{ item.details.price }}</p>
      <p class="mt-3">Min Price- {{ item.details.minPrice }}</p>
      <p class="mt-3">Max Price- {{ item.details.maxPrice }}</p>
    </v-card-text>

    <v-contianer>
      <v-btn @click="onBuyItem(item._id)" :loading="buttonLoading" class="mx-4"
        >Buy
      </v-btn>
      <v-btn v-if="isEditable" @click="onEditItem(item._id)">Edit </v-btn>
    </v-contianer>
  </v-card>
</template>

<script>
import { purchaseItemService } from "@/services/item/item.service";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  props: {
    item: {
      type: Object,
    },
  },

  setup(props, context) {
    const isEditable = ref(false);
    const buttonLoading = ref(false);
    const store = useStore();
    const router = useRouter();

    // created
    const sellerItemIds = store.getters["item/getSellerItemState"].map(
      (item) => item.id
    );
    if (sellerItemIds.includes(props.item.id)) {
      isEditable.value = true;
    }
    // methods
    const isAlert = () => {
      context.emit("toggleAlert");
    };

    const onBuyItem = async (itemId) => {
      try {
        buttonLoading.value = true;
        await purchaseItemService({
          item: itemId,
          purchasePrice: props.item.details.price,
        });
        setTimeout(() => {
          buttonLoading.value = false;
          isAlert();
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    const onEditItem = (itemId) => {
      router.push({ name: "editItem", params: { itemId: itemId } });
    };
    return {
      onBuyItem,
      onEditItem,
      isAlert,
      isEditable,
      buttonLoading,
    };
  },
};
</script>
