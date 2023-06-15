<template>
  <v-card width="300">
    <v-card-text>
      <p class="text-h5 text--primary">{{ item.name }}</p>
      <div class="text--primary mt-3">
        {{ item.details.description }}
      </div>
      <p class="mt-3">Price- {{ item.details.price }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        @click="onBuyItem(item._id)"
        variant="text"
        color="deep-purple-accent-4"
        >Buy
      </v-btn>
      <v-btn
        v-if="isEditable"
        @click="onEditItem(item._id)"
        variant="text"
        color="deep-purple-accent-4"
        >Edit
      </v-btn>
    </v-card-actions>
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
    const store = useStore();
    const router = useRouter();

    // created
    // props.item.id;
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
        isAlert();
        await purchaseItemService({
          item: itemId,
          purchasePrice: props.item.details.price,
        });
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
    };
  },
};
</script>
