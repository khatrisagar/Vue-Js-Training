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
        SET_SALE(state, saleDataObject) {
            state.isSaleRunning = saleDataObject.isSaleRunning;
            state.saleStartTime = saleDataObject.saleStartTime;
            state.saleEndTime = saleDataObject.saleEndTime;
        },
        REMOVE_SALE(state) {
            state.isSaleRunning = false;
        },
    },
    actions: {
        setStartSale({ commit }, saleDataObject) {
            commit("SET_SALE", saleDataObject);
        },
        setEndSale({ commit }) {
            commit("REMOVE_SALE");
        },
    },
    getters: {
        getSaleEndTime(state) {
            return state.saleEndTime;
        },
        getSaleStatus(state) {
            return state.isSaleRunning;
        },
        getSaleInformation(state) {
            return {
                isSaleRunning: state.isSaleRunning,
                saleStartTime: state.saleStartTime,
                saleEndTime: state.saleEndTime,
            };
        },
    },
};
