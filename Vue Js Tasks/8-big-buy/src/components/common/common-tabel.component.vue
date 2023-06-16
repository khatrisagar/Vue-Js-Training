<template>
  <!-- <div class="table-wrapper">
    <v-table class="table">
      <thead>
        <tr>
          <th
            class="text-center"
            v-for="header in tableHeader"
            :key="header.key"
          >
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td class="text-center" v-for="info in itemInfo" :key="info.key">
            <p v-if="info.type === 'string'">
              {{ item[info.key] }}
            </p>
            <p v-if="info.type === 'currency'">
              {{
                Intl.NumberFormat("en-in", {
                  style: "currency",
                  currency: "INR",
                }).format(item[info.key])
              }}
            </p>
            <p v-if="info.type === 'date'">
              {{ new Date(item[info.key]).toLocaleDateString() }}
            </p>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div> -->
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
          <td>{{ item.details.description }}</td>
          <td>
            {{
              Intl.NumberFormat("en-in", {
                style: "currency",
                currency: "INR",
              }).format(item.details.price)
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
import { computed } from "vue";
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
    const itemDetail = () => {
      return 1;
    };
    const getItemDetail = computed(() => {
      return itemDetail();
    });

    // methods
    const onEditItem = (itemId) => {
      router.push({ name: "editItem", params: { itemId: itemId } });
    };
    return {
      itemDetail,
      getItemDetail,

      onEditItem,
    };
  },
};
</script>
