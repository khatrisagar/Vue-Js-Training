<template>
    <div class="alert-wrapper">
        <div class="container alert-container">
            <div>
                <div v-if="saleTimer !== 0">
                    Sale Ends In: {{ getTimer }} check sale
                    <a href="#sell-products">here</a>
                </div>
                <div v-if="saleTimer === 0">Sale Ended</div>
            </div>

            <div>
                <button class="close-button" @click="closeHeaderAlert">
                    X
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import { resetProductSale } from "@/utils/helpers/getProducts";
export default {
    mounted() {
        this.setSaleTimer();
    },
    data() {
        return {
            saleTimer: 0,
        };
    },
    methods: {
        closeHeaderAlert() {
            this.$emit("closeHeaderAlert");
        },
        setSaleTimer() {
            const saleEndTime = this.$store.getters["saleStore/getSaleEndTime"];
            const interval = setInterval(() => {
                this.saleTimer = Math.floor(
                    moment
                        .duration(moment(saleEndTime).diff(moment()))
                        .as("second")
                );
                if (this.saleTimer <= 0) {
                    clearInterval(interval);
                    resetProductSale();
                    this.$store.dispatch("saleStore/setEndSale");
                    this.saleTimer = 0;
                    localStorage.removeItem("sale");
                }
            }, 1000);
        },
    },
    computed: {
        getTimer() {
            const time =
                Math.floor(this.saleTimer / 60) +
                " minutes and " +
                Math.floor(this.saleTimer % 60) +
                " seconds";
            return time;
        },
    },
};
</script>

<style scoped>
.alert-wrapper {
    background-color: var(--primary-color);
}
.alert-container {
    height: 40px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.close-button {
    font-size: 1rem;
    font-weight: 900;
    background: transparent;
    border: none;
}
</style>
