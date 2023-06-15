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
          <th>Created Date</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          {{
            item.item
          }}
          <!-- <td>{{ item.name }}</td>
          <td>{{ item.details.description }}</td>
          <td>{{ item.details.price }}</td>
          <td>{{ item.details.minPrice }}</td>
          <td>{{ item.details.maxPrice }}</td>
          <td>{{ new Date(item.createdAt).toLocaleDateString() }}</td>
          <td><V-btn @click="onEditItem(item._id)">Edit</V-btn></td> -->
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    tableHeader: {
      type: Array,
    },
    itemInfo: {
      type: Array,
    },
    items: {
      type: Array,
    },
  },

  setup() {
    const itemDetail = () => {
      return 1;
    };
    const getItemDetail = computed(() => {
      return itemDetail();
    });
    return {
      itemDetail,
      getItemDetail,
    };
  },
};
</script>
