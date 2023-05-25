<template>
    <div class="container order-history-wrapper">
        <div class="orders-card-container">
            <orderHistoryCard
                v-for="order in getOrderhistories"
                :key="order.id"
                :order="order"
            />
        </div>
    </div>
</template>

<script>
import orderHistoryCard from "@/components/orderHistorycards.vue";
import { getLoggedInUserData } from "@/utils/helpers/getLoggedInUserData";

export default {
    components: { orderHistoryCard },

    computed: {
        getOrderhistories() {
            let history = [];

            const allOrders = JSON.parse(localStorage.getItem("orders")) ?? [];
            console.log(allOrders);
            getLoggedInUserData().orderHistory.forEach((orderHistoryID) => {
                allOrders?.forEach((order) => {
                    if (orderHistoryID === order.id) {
                        history.push(order);
                    }
                });
            });
            return history;
        },
    },
};
</script>

<style scoped>
.order-history-wrapper {
    margin-top: 2rem;
}
.orders-card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
