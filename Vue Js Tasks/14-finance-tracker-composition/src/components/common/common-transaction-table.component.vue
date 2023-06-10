<template>
    <div class="table-wrapper">
        <v-table class="table">
            <thead>
                <tr>
                    <th
                        v-for="header in tableHeaders"
                        :key="header.key"
                        class="text-center"
                    >
                        <router-link
                            v-if="header.isSortable"
                            :to="{
                                name: 'transactions',
                                query: {
                                    sort: header.key,
                                    order: getSortingOrder ? 'desc' : 'asc',
                                },
                            }"
                        >
                            <v-icon :icon="header.icon" />{{ header.title }}
                        </router-link>
                        <p v-if="!header.isSortable">
                            <v-icon :icon="header.icon" />{{ header.title }}
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="transaction in getPagnationOnSortedTransactions"
                    :key="transaction.id"
                >
                    <td>{{ transaction.transactionDate }}</td>
                    <td>
                        <v-chip :color="getFieldColor(transaction.monthYear)">
                            {{ transaction.monthYear }}
                        </v-chip>
                    </td>
                    <td>
                        <v-chip
                            :color="getFieldColor(transaction.transactionType)"
                        >
                            {{ transaction.transactionType }}
                        </v-chip>
                    </td>
                    <td>
                        <v-chip :color="getFieldColor(transaction.fromAccount)">
                            {{ transaction.fromAccount }}
                        </v-chip>
                    </td>
                    <td>
                        <v-chip :color="getFieldColor(transaction.toAccount)">
                            {{ transaction.toAccount }}
                        </v-chip>
                    </td>
                    <td>
                        {{
                            Intl.NumberFormat("en-in", {
                                style: "currency",
                                currency: "INR",
                            }).format(transaction.amount)
                        }}
                    </td>

                    <td>
                        <v-img
                            :width="100"
                            aspect-ratio="16/9"
                            cover
                            :src="transaction.receipt.image"
                            :alt="transaction.receipt.name"
                        ></v-img>
                    </td>
                    <td>{{ transaction.notes }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'transaction',
                                params: { transactionId: transaction.id },
                            }"
                        >
                            View
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <v-select
            class="d-flex mt-2"
            style="max-width: 100px"
            :items="pagesSelections"
            v-model="transactionsPerPage"
        ></v-select>
        <v-pagination
            class="justify-self-center"
            v-model="page"
            width="10"
            :length="getPages"
        ></v-pagination>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
export default {
    props: {
        transactionsData: {
            type: Object,
        },
        colors: {
            type: Object,
        },
    },
    setup(props) {
        const route = useRoute();

        const page = ref(1);
        const pagesSelections = ref([5, 10, 25]);
        const transactionsPerPage = ref(5);
        const tableHeaders = [
            {
                title: "Transaction Date",
                icon: "fa-solid fa-calendar-days",
                isSortable: false,
                key: "transactionDate",
            },
            {
                title: "Month Year",
                icon: "fa-solid fa-calendar-check",
                isSortable: true,
                key: "monthYear",
            },
            {
                title: "Transaction Type",
                icon: "fa-solid fa-arrow-up-from-bracket",
                isSortable: true,
                key: "transactionType",
            },
            {
                title: "From Account",
                icon: "fa-solid fa-right-left",
                isSortable: true,
                key: "fromAccount",
            },
            {
                title: "To Account",
                icon: "fa-solid fa-right-left",
                isSortable: true,
                key: "toAccount",
            },
            {
                title: "Amount",
                key: "amount",
                icon: "fa-solid fa-file-invoice-dollar",
                isSortable: true,
            },
            {
                title: "Receipt",
                icon: "fa-solid fa-receipt",
                isSortable: false,
                key: "receipt",
            },
            {
                title: "Notes",
                icon: "fa-solid fa-note-sticky",
                isSortable: true,
                key: "notes",
                align: "left",
                width: "100px",
            },
            {
                title: "Action",
                icon: "fa-brands fa-artstation",
                isSortable: false,
                key: "action",
            },
        ];

        const getFieldColor = (name) => {
            const colorObj = props.colors.find((colorObj) => {
                if (colorObj.fieldName.includes(name)) {
                    return colorObj;
                }
            });
            return colorObj?.color;
        };
        const getSortingOrder = computed(() => {
            if (route.query.order === "desc") {
                return false;
            } else {
                return true;
            }
        });
        const getSortadeTransactions = computed(() => {
            const sortBy = route.query.sort;

            let shortedTransactionData = JSON.parse(
                JSON.stringify(props.transactionsData)
            );
            if (sortBy && getSortingOrder.value) {
                if (typeof shortedTransactionData?.[0]?.[sortBy] === "number") {
                    shortedTransactionData.sort((a, b) => {
                        return a[sortBy] - b[sortBy];
                    });
                } else {
                    shortedTransactionData.sort((a, b) => {
                        if (a[sortBy] > b[sortBy]) {
                            return 1;
                        }
                        if (b[sortBy] > a[sortBy]) {
                            return -1;
                        }
                        return 0;
                    });
                }
                return shortedTransactionData;
            } else if (sortBy && !getSortingOrder.value) {
                if (typeof shortedTransactionData?.[0]?.[sortBy] === "number") {
                    shortedTransactionData.sort((a, b) => {
                        return b[sortBy] - a[sortBy];
                    });
                } else {
                    shortedTransactionData.sort((a, b) => {
                        if (a[sortBy] > b[sortBy]) {
                            return -1;
                        }
                        if (b[sortBy] > a[sortBy]) {
                            return 1;
                        }
                        return 0;
                    });
                }
                return shortedTransactionData;
            } else {
                return props.transactionsData;
            }
        });

        const getPagnationOnSortedTransactions = computed(() => {
            if (
                getSortadeTransactions.value.length > transactionsPerPage.value
            ) {
                const transactions = [];
                for (let transactionIndex in getSortadeTransactions.value) {
                    if (
                        transactionIndex >=
                            (page.value - 1) * transactionsPerPage.value &&
                        transactionIndex <
                            page.value * transactionsPerPage.value
                    ) {
                        transactions.push(
                            getSortadeTransactions.value[transactionIndex]
                        );
                    }
                }
                return transactions;
            } else {
                return getSortadeTransactions.value;
            }
        });
        const getPages = computed(() => {
            const length = Math.ceil(
                getSortadeTransactions.value.length / transactionsPerPage.value
            );

            return length;
        });

        return {
            page,
            pagesSelections,
            transactionsPerPage,
            tableHeaders,
            getFieldColor,
            getSortadeTransactions,
            getSortingOrder,
            getPagnationOnSortedTransactions,
            getPages,
        };
    },

    computed: {},
};
</script>

<style scoped>
th,
td {
    text-align: center;
    padding: 1px;
}
td {
    max-width: 200px !important;
    word-wrap: break-word;
}
</style>
