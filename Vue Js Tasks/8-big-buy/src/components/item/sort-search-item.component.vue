<template>
  <v-sheet class="d-flex mt-2 mx-2">
    <v-select
      class="d-flex"
      style="min-width: 500px"
      label="SortBy"
      :items="sortBySelection"
      :item-title="(item) => item.name"
      :item-value="(item) => item.key"
      v-model="sortBy"
      @update:modelValue="getItemsByOptions(1)"
    ></v-select>
    <v-sheet :width="200" class="d-flex">
      <v-select
        variant="solo-filled"
        label="SearchBy"
        v-model="searchBy"
        hide-details="auto"
        :items="sortBySelection"
        :item-title="(item) => item.name"
        :item-value="(item) => item.key"
      >
      </v-select>
    </v-sheet>

    <v-sheet :width="500" class="ml-4">
      <v-text-field
        label="Search"
        hide-details="auto"
        v-model="searchValue"
        @input="searchItem"
      >
      </v-text-field>
    </v-sheet>
  </v-sheet>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const sortBy = ref("name");
    const searchBy = ref("name");
    const searchValue = ref(null);
    const sortBySelection = ref([
      { name: "Name", key: "name" },
      { name: "Description", key: "details.description" },
      { name: "Price", key: "details.price" },
      { name: "Min Price", key: "details.minPrice" },
      { name: "Max Price", key: "details.maxPrice" },
    ]);

    return {
      sortBy,
      searchBy,
      searchValue,
      sortBySelection,
    };
  },
};
</script>
