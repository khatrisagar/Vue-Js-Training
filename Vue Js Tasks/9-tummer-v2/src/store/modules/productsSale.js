import moment from "moment";
import { getProducts, resetProductSale } from "@/utils/helpers/getProducts";

export default {
    namespaced: true,
    state() {
        return {
            isSaleRunning: false,
            saleStartTime: null,
            saleEndTime: null,
        };
    },
    mutations: {
        startSale(state) {
            const saleData = JSON.parse(localStorage.getItem("sale")) ?? null;
            if (saleData) {
                console.log("ifff");
                state.isSaleRunning = saleData.isSaleRunning;
                state.saleStartTime = saleData.saleStartTime;
                state.saleEndTime = saleData.saleEndTime;
            } else {
                state.isSaleRunning = true;
                state.saleStartTime = moment();
                state.saleEndTime = moment().minute(moment().minute() + 1);

                resetProductSale();
                const randomValueArray = Array(5)
                    .fill()
                    .map(() =>
                        Math.floor(Math.random() * getProducts().length)
                    );
                const products = getProducts();
                products.forEach((product) => {
                    if (randomValueArray.includes(product.id)) {
                        product.isSale = true;
                    }
                });
                localStorage.setItem("products", JSON.stringify(products));

                localStorage.setItem("sale", JSON.stringify(state));
            }
        },
        endSale(state) {
            state.isSaleRunning = false;
        },
    },
    actions: {
        setStartSale(context) {
            context.commit("startSale");
        },
        setEndSale(context) {
            context.commit("endSale");
        },
    },
    getters: {
        getSaleEndTime(state) {
            return state.saleEndTime;
        },
        getSaleStatus(state) {
            return state.isSaleRunning;
        },
    },
};
