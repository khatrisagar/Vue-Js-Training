<template>
  <div class="table-wrapper">
    <v-text-field
      label="Search"
      hide-details="auto"
      v-model="searchValue"
      @keyup="searchItem"
      class="mr-4"
    >
    </v-text-field>
    <v-table class="table">
      <thead>
        <tr>
          <th @click="onClickSorting('id')">Id</th>
          <th @click="onClickSorting('customer.name')">Customer Name</th>
          <th @click="onClickSorting('customer.surname')">Customer Surname</th>
          <th @click="onClickSorting('customer.email')">Customer Email</th>
          <th @click="onClickSorting('customer.contact')">Customer Contact</th>
          <th @click="onClickSorting('deliveryAgent.name')">
            Delivery Agent Name
          </th>
          <th @click="onClickSorting('deliveryAgent.surname')">
            Delivery Agent Surname
          </th>
          <th @click="onClickSorting('deliveryAgent.email')">
            Delivery Agent Email
          </th>
          <th @click="onClickSorting('deliveryAgent.contact')">
            Delivery Agent Contact
          </th>
          <th @click="onClickSorting('payment.paymnetType')">Payment Type</th>
          <th @click="onClickSorting('payment.amount')">Payment Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order._id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer.name }}</td>
          <td>{{ order.customer.surname }}</td>
          <td>{{ order.customer.email }}</td>
          <td>{{ order.customer.contact }}</td>
          <td>{{ order.deliveryAgent.name }}</td>
          <td>{{ order.deliveryAgent.surname }}</td>
          <td>{{ order.deliveryAgent.email }}</td>
          <td>{{ order.deliveryAgent.contact }}</td>
          <td>{{ order.payment.paymnetType }}</td>
          <td>{{ order.payment.amount }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <v-container>
    <v-select
      class="d-flex mt-2"
      style="max-width: 100px"
      :items="itemsPerPageSelection"
      v-model="itemsPerPage"
      @update:modelValue="getOrders()"
    ></v-select>

    <v-pagination
      class="justify-self-center"
      v-model="page"
      width="10"
      :length="pagesLength"
      @update:modelValue="getOrders(page)"
    ></v-pagination>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const orders = ref([]);
    const itemsPerPage = ref(5);
    const itemsPerPageSelection = ref([5, 10, 15, 20, 25]);
    const page = ref(1);
    const pagesLength = ref(1);
    const searchValue = ref("");
    const sortBy = ref("id");
    const sort = ref("DESC");

    const getOrders = async () => {
      try {
        const response = await fetch(
          `http://localhost:9999/api/orders?limit=${itemsPerPage.value}&page=${
            page.value
          }&order=${JSON.stringify({ [sortBy.value]: sort.value })}&search=${
            searchValue.value
          }`
        );
        const data = await response.json();
        console.log(data.data);
        orders.value = data.data;
        pagesLength.value = Math.ceil(data.count / itemsPerPage.value);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();

    const debounce = (fnToDebounce, delay = 1000) => {
      let timeout;

      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
          await fnToDebounce(...args);
        }, delay);
      };
    };
    const updateItemBySearching = debounce(() => {
      getOrders();
    }, 1000);

    const onClickSorting = async (sortByValue) => {
      try {
        // if (sort.value === "DESC") {
        //   sort.value = "ASC";
        // }
        // if (sort.value == "ASC") {
        //   sort.value = "DESC";
        // }
        sortBy.value = sortByValue;
        sort.value = sort.value === "DESC" ? "ASC" : "DESC";

        await getOrders();
      } catch (e) {
        console.log("sss", e);
      }
    };

    const searchItem = () => {
      updateItemBySearching();
    };
    return {
      orders,
      getOrders,
      searchItem,
      searchValue,
      itemsPerPage,
      itemsPerPageSelection,
      pagesLength,
      page,
      sortBy,
      sort,
      onClickSorting,
    };
  },
};
</script>
