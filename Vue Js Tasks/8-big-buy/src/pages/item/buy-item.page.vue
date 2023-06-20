<template>
  <!-- <v-sheet class="d-flex mt-2 mx-2"> -->
  <!-- sorting -->
  <v-sheet class="d-flex mx-4 mt-4">
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
    <!-- search selection -->
    <v-sheet width="330px" class="d-flex">
      <v-select
        variant="solo-filled"
        label="SearchBy"
        multiple
        v-model="searchValue"
        return-object
        hide-details="auto"
        :items="searchBySelection"
        :item-title="(item) => item.name"
        :item-value="(item) => item.key"
      >
      </v-select>
    </v-sheet>
  </v-sheet>
  <!-- search input -->
  <v-sheet class="w-100 ml-4 mt-4 d-flex align-center flex-row">
    <div v-for="searchField of searchValue" :key="searchField.key">
      <v-sheet width="300" class="d-flex align-center">
        <v-chip class="mr-4" label>{{ searchField.name }}</v-chip>
        <v-text-field
          label="Search"
          hide-details="auto"
          v-model="searchField.value"
          @keyup="searchItem"
          class="mr-4"
        >
        </v-text-field>
      </v-sheet>
    </div>
  </v-sheet>
  <div v-if="!isLoaderVisible && isDataExist">
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
  <div
    v-if="!isLoaderVisible && !isDataExist"
    style="min-height: 300px"
    class="d-flex justify-center align-center"
  >
    <p class="text-h3 font-weight-bold">No Items Available</p>
  </div>
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
import { onBeforeMount, computed, ref, watch } from "vue";
import { useStore } from "vuex";
// componentns
import commonCard from "@/components/common/common-card.component.vue";
// services
import { getAllItemService } from "@/services";
// helpers
import { setSellerItem } from "@/utils";

export default {
  components: {
    commonCard,
  },
  setup() {
    const isWarning = ref(false);
    const isDataExist = ref(false);
    const store = useStore();
    const allItems = ref([]);
    const page = ref(1);
    const pagesLength = ref(1);
    const itemsPerPage = ref(5);
    const itemsPerPageSelection = ref([5, 10, 15, 20, 25]);
    const sortBy = ref("name");
    const searchBy = ref("name");
    const searchValue = ref([]);
    const sortBySelection = ref([
      { name: "Name", key: "name" },
      { name: "Description", key: "details.description" },
      { name: "Price", key: "details.price" },
      { name: "Min Price", key: "details.minPrice" },
      { name: "Max Price", key: "details.maxPrice" },
    ]);
    const searchBySelection = [
      { name: "Name", key: "name" },
      { name: "Price", key: "details.price" },
      { name: "Min Price", key: "details.minPrice" },
      { name: "Max Price", key: "details.maxPrice" },
    ];

    onBeforeMount(async () => {
      try {
        store.dispatch("loader/addLoaderState");
        await Promise.all([getItemsByOptions(), setSellerItem()]);
        store.dispatch("loader/removeLoaderState");
      } catch (error) {
        console.log(error);
      }
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
      try {
        page.value = pageNo;
        const searchCondition = {};
        for (let condition of searchValue.value) {
          searchCondition[condition?.key] = condition?.value.trim();
        }
        const response = await getAllItemService({
          params: {
            sort: `{ "${sortBy.value}": 1 }`,
            where: JSON.stringify(searchCondition),
            page: page.value,
            limit: itemsPerPage.value,
          },
        });
        if (response.data.data.length) {
          isDataExist.value = true;
        } else {
          isDataExist.value = false;
        }
        pagesLength.value = Math.ceil(
          response.data.pagination.count / itemsPerPage.value
        );
        allItems.value = response.data.data;
      } catch (error) {
        console.log("error");
      }
    };

    const debounce = (fnToDebounce, delay = 1000) => {
      let timeout;

      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
          store.dispatch("loader/addLoaderState");
          await fnToDebounce(...args);
          store.dispatch("loader/removeLoaderState");
        }, delay);
      };
    };
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
    // watch
    watch(searchValue, (newSearchValue, searchValue) => {
      if (searchValue.length < newSearchValue.length) {
        newSearchValue[newSearchValue.length - 1].value = "";
      }
      getItemsByOptions(1);
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
      searchBySelection,
      allItems,
      isWarning,
      isDataExist,
      // methods
      searchItem,
      toggleAlert,
      getItemsByOptions,
      // computed
      isLoaderVisible,
    };
  },
};
</script>
