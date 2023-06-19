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
          <th v-if="pageMode === 'viewItems'">Created Date</th>
          <th v-if="pageMode === 'viewItems'">Edit</th>
          <th v-if="pageMode === 'purchaseHistory'">Purchased Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.name }}</td>
          <td>{{ item.details?.description }}</td>
          <td>
            {{
              Intl.NumberFormat("en-in", {
                style: "currency",
                currency: "INR",
              }).format(item.details?.price)
            }}
          </td>
          <td>
            {{
              Intl.NumberFormat("en-in", {
                style: "currency",
                currency: "INR",
              }).format(item.details.minPrice)
            }}
          </td>
          <td>
            {{
              Intl.NumberFormat("en-in", {
                style: "currency",
                currency: "INR",
              }).format(item.details.maxPrice)
            }}
          </td>
          <td>{{ new Date(item.createdAt).toLocaleString() }}</td>
          <td v-if="pageMode === 'viewItems'">
            <V-btn @click="onEditItem(item._id)">Edit</V-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    pageMode: {
      type: String,
    },
    items: {
      type: Array,
    },
  },

  setup() {
    const router = useRouter();

    // methods
    const onEditItem = (itemId) => {
      router.push({ name: "editItem", params: { itemId: itemId } });
    };
    return {
      onEditItem,
    };
  },
};
</script>
