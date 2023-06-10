<template>
    <div v-if="isTransactionData">
        <viewTransactionCard :transaction="getCurrentTransactionState" />
    </div>
    <v-container class="d-flex justify-center" v-if="!isTransactionData">
        <v-sheet w-100>
            <h2>No Transaction Data Available</h2>
        </v-sheet>
    </v-container>
</template>

<script>
import viewTransactionCard from "@/components/common/view-transaction-card.component.vue";
import { useStore } from "vuex";
import { setUserTransactionState } from "@/utils";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
export default {
    components: {
        viewTransactionCard,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const isTransactionData = ref(false);

        // on created
        setUserTransactionState();
        const currentTransaction = store.getters[
            "transaction/getTransactionsState"
        ].find((transaction) => {
            return transaction.id == route.params.transactionId;
        });
        if (currentTransaction) {
            store.dispatch(
                "transaction/setCurrentTransactionState",
                currentTransaction
            );
            isTransactionData.value = true;
        } else {
            isTransactionData.value = false;
        }

        // computed
        const getCurrentTransactionState = computed(() => {
            return store.getters["transaction/getCurrentTransactionState"];
        });

        return { isTransactionData, getCurrentTransactionState };
    },
};
</script>
