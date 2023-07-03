<template>
  <dataTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dataTable from "@/components/common/data-table.component.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    dataTable,
  },
});
</script>
