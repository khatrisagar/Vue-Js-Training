<template>
  <div v-if="!isLoaderVisible">
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
    <v-sheet class="d-flex pa-6 w-100 flex-wrap justify-space-evenly">
      <commonCard
        class="mt-4"
        v-for="item in allItems"
        :key="item._id"
        :item="item"
        @toggleAlert="toggleAlert"
      />
    </v-sheet>
    <v-container>
      <v-select
        class="d-flex mt-2"
        style="max-width: 100px"
        :items="itemsPerPageSelection"
        v-model="itemsPerPage"
        @update:modelValue="getItemsByOptions(1)"
      ></v-select>
      <v-pagination
        class="justify-self-center"
        v-model="page"
        width="10"
        :length="pagesLength"
        @update:modelValue="getItemsByOptions(page)"
      ></v-pagination>
    </v-container>

    <v-overlay v-model="isWarning"></v-overlay>
    <v-container>
      <v-snackbar v-model="isWarning">
        Item Successfully Purchased
        <template v-slot:actions>
          <v-btn color="blue" variant="text" @click="isWarning = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
  <div class="d-flex justify-center align-center">
    <v-progress-circular
      indeterminate
      :size="95"
      :width="10"
      v-if="isLoaderVisible"
    ></v-progress-circular>
  </div>
  <sortSearchItem />
</template>

<script>
import { onBeforeMount, computed, ref } from "vue";
import { useStore } from "vuex";
// componentns
import commonCard from "@/components/common/common-card.component.vue";
import sortSearchItem from "@/components/item/sort-search-item.component.vue";
// services
import { getAllItemService } from "@/services";
// helpers
import { setSellerItem } from "@/utils";

export default {
  components: {
    commonCard,
    sortSearchItem,
  },
  setup() {
    const isWarning = ref(false);
    const store = useStore();
    const allItems = ref([]);
    const page = ref(1);
    const pagesLength = ref(1);
    const itemsPerPage = ref(5);
    const itemsPerPageSelection = ref([5, 10, 15, 20, 25]);
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

    onBeforeMount(async () => {
      store.dispatch("loader/addLoaderState");
      await Promise.all([getItemsByOptions(), setSellerItem()]);
      store.dispatch("loader/removeLoaderState");
    });

    // methods
    const toggleAlert = () => {
      isWarning.value = true;

      setTimeout(() => {
        isWarning.value = false;
      }, 3000);
    };
    //
    const getItemsByOptions = async (pageNo) => {
      console.log("aa");
      // const options =()
      //   'sort={"details.price": 1}&where={"details.price":4343}&page=1&limit=3';
      page.value = pageNo;

      const response = await getAllItemService({
        params: {
          sort: `{ "${sortBy.value}": 1 }`,
          where: `{ "${searchBy.value}":  ${
            isNaN(searchValue.value)
              ? '"' + searchValue.value + '"'
              : parseInt(searchValue.value)
          }}`,
          page: page.value,
          limit: itemsPerPage.value,
        },
      });
      console.log("Aaa", response);
      pagesLength.value = Math.ceil(
        response.data.pagination.count / itemsPerPage.value
      );
      allItems.value = response.data.data;
    };

    function debounce(fnToDebounce, delay = 1000) {
      console.log("aa");
      let timeout;

      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
          store.dispatch("loader/addLoaderState");
          await fnToDebounce(...args);
          store.dispatch("loader/removeLoaderState");
        }, delay);
      };
    }
    const updateItemBySearching = debounce(() => {
      getItemsByOptions(1);
    }, 1000);

    const searchItem = () => {
      updateItemBySearching();
    };
    // computed
    const isLoaderVisible = computed(() => {
      return store.getters["loader/getLoaderState"];
    });
    return {
      // data
      page,
      pagesLength,
      itemsPerPage,
      itemsPerPageSelection,
      sortBy,
      searchBy,
      searchValue,
      sortBySelection,
      allItems,
      isWarning,
      searchItem,
      toggleAlert,
      getItemsByOptions,
      isLoaderVisible,
    };
  },
};
</script>
