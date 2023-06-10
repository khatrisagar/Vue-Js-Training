<template>
    <v-sheet width="400" class="mx-auto">
        <v-form @submit.prevent v-if="isTransactionData" ref="form">
            <v-text-field
                v-model="transaction.transactionDate"
                label="Transaction Date"
                :rules="getTransactionFormValidation.transactionDateRules"
                type="date"
            ></v-text-field>

            <v-select
                v-model="transaction.monthYear"
                label="Month Year"
                variant="solo-filled"
                :rules="getTransactionFormValidation.monthYearRules"
                :items="monthYearSelections"
            >
            </v-select>
            <v-select
                v-model="transaction.transactionType"
                label="Transaction Type"
                variant="solo-filled"
                :rules="getTransactionFormValidation.transactionTypeRules"
                :items="transactionTypeSelections"
            ></v-select>

            <v-select
                v-model="transaction.fromAccount"
                label="From Account"
                variant="solo-filled"
                :rules="validations.fromAccountRules"
                :items="fromAccountSelections"
            ></v-select>
            <v-select
                v-model="transaction.toAccount"
                label="To Account"
                variant="solo-filled"
                :rules="validations.toAccountRules"
                :items="toAccountSelections"
            ></v-select>
            <v-text-field
                v-model="transaction.amount"
                label="Amount"
                type="number"
                :rules="getTransactionFormValidation.amountRules"
            ></v-text-field>
            <v-file-input
                v-model="transaction.receipt"
                label="File input"
                variant="solo-inverted"
                :rules="getTransactionFormValidation.receiptRules"
            ></v-file-input>
            <v-textarea
                v-model="transaction.notes"
                label="notes"
                variant="solo-inverted"
                :rules="getTransactionFormValidation.notesRules"
            ></v-textarea>
            <v-btn
                v-if="!isFormEditMode"
                type="submit"
                @click="onAddTransaction"
                block
                class="mt-2"
                >Add Transaction</v-btn
            >
            <v-btn
                v-if="isFormEditMode"
                type="submit"
                @click="onEditTransaction"
                block
                class="mt-2"
                >Update Transaction</v-btn
            >
        </v-form>
        <v-container class="d-flex justify-center" v-if="!isTransactionData">
            <v-sheet w-100>
                <h2>No Transaction Data Available</h2>
            </v-sheet>
        </v-container>
    </v-sheet>
</template>

<script>
import { getTransactionFromLocalStorage } from "@/services";
import { setTransactionsToLocalStorage } from "@/services";
import { getUsersFromLocalStorage, setUsersToLocalStorage } from "@/services";
import { setUserTransactionState } from "@/utils";

import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { transactionFormValidation } from "@/validations";

export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useStore();

        const form = ref(null);
        const initialTransactionObject = ref(null);
        const transaction = ref({
            id: null,
            transactionDate: null,
            monthYear: null,
            transactionType: null,
            fromAccount: null,
            toAccount: null,
            amount: null,
            receipt: null,
            notes: null,
        });

        const monthYearSelections = [
            "Jan 2023",
            "Feb 2023",
            "Mar 2023",
            "Arp 2023",
            "May 2023",
            "Jun 2023",
            "Jul 2023",
            "Aug 2023",
            "Sep 2023",
            "Oct 2023",
            "Nov 2023",
            "Des 2023",
        ];

        const transactionTypeSelections = [
            "Home Expense",
            "Personal Expense",
            "Income",
        ];
        const fromAccountSelections = [
            "Personal Account",
            "Real Living",
            "My Dream Home",
            "Full Circle",
            "Core Realtors",
            "Big Block",
        ];
        const toAccountSelections = [
            "Personal Account",
            "Real Living",
            "My Dream Home",
            "Full Circle",
            "Core Realtors",
            "Big Block",
        ];

        const isTransactionData = ref(true);
        const isFormEditMode = ref(false);

        // computed
        const getTransactionsState = computed(() => {
            return store.getters["transaction/getTransactionsState"];
        });

        const getLoggedInUserState = computed(() => {
            return store.getters["user/getLoggedInUserState"];
        });
        const getTransactionFormValidation = computed(() => {
            return transactionFormValidation;
        });
        const validations = {
            fromAccountRules: [
                (value) => {
                    if (value) return true;

                    return "Please Select From Account Field.";
                },
                (value) => {
                    if (value !== transaction.value.toAccount) return true;

                    return "Value Sould be diffrent from To Account.";
                },
            ],
            toAccountRules: [
                (value) => {
                    if (value) return true;

                    return "Please Select To Account Field.";
                },
                (value) => {
                    if (value !== transaction.value.fromAccount) return true;

                    return "Value Sould be diffrent from From Account.";
                },
            ],
        };
        // created
        initialTransactionObject.value = JSON.parse(
            JSON.stringify(transaction.value)
        );
        console.log("initialTransactionObject", initialTransactionObject.value);
        setUserTransactionState();
        setFormTransactionData(route);

        // convert image to base 64

        function convertImageToBase64() {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(transaction.value.receipt[0]);
                let receiptObject;
                reader.onload = () => {
                    receiptObject = {
                        image: reader.result,
                        name: transaction.value.receipt[0].name,
                        type: transaction.value.receipt[0].type,
                    };
                    resolve(receiptObject);
                };
            });
        }

        // on load edit form

        async function setFormTransactionData(route) {
            const transactionId = route.params.transactionId;
            if (transactionId) {
                isFormEditMode.value = true;
                const transactionToEdit = getTransactionsState.value.find(
                    (transaction) => {
                        return transaction.id == transactionId;
                    }
                );

                if (transactionToEdit) {
                    transaction.value = JSON.parse(
                        JSON.stringify(transactionToEdit)
                    );

                    const res = await fetch(transactionToEdit.receipt.image);
                    const blob = await res.blob();
                    transaction.value.receipt = [
                        new File([blob], transactionToEdit.receipt.name, {
                            type: transactionToEdit.receipt.type,
                        }),
                    ];
                } else {
                    isTransactionData.value = false;
                }
            } else {
                transaction.value = initialTransactionObject.value;

                isFormEditMode.value = false;
            }
        }

        // on transaction add

        async function onAddTransaction() {
            const { valid } = await form.value.validate();
            if (valid) {
                const receiptObject = await convertImageToBase64();
                setTimeout(() => {
                    const transactionId = new Date().getTime();

                    let transactions = getTransactionFromLocalStorage();
                    transactions.push({
                        ...transaction.value,
                        id: transactionId,
                        receipt: receiptObject,
                        amount: parseInt(transaction.value.amount),
                        users: [getLoggedInUserState.value.loggedInUserId],
                    });
                    const users = getUsersFromLocalStorage();
                    const user = users.find((user) => {
                        return (
                            user.id ===
                            getLoggedInUserState.value.loggedInUserId
                        );
                    });
                    user.transactions.push(transactionId);
                    setUsersToLocalStorage(users);
                    setTransactionsToLocalStorage(transactions);
                    router.push({ name: "transactions" });
                }, 500);
            }
        }

        // on form edit
        async function onEditTransaction() {
            const { valid } = await form.value.validate();
            if (valid) {
                const transactionId = route.params.transactionId;
                const transactions = getTransactionsState.value;
                let transactionIndex = transactions.findIndex(
                    (transaction) => transaction.id == transactionId
                );
                const receiptObject = await convertImageToBase64();
                transactions[transactionIndex] = {
                    ...JSON.parse(JSON.stringify(transaction.value)),
                    receipt: receiptObject,
                    amount: parseInt(transaction.value.amount),
                };

                setTransactionsToLocalStorage(transactions);
                router.push({ name: "transactions" });
            }
        }

        watch(route, (newRoute) => {
            setFormTransactionData(newRoute);
        });

        return {
            form,
            initialTransactionObject,
            transaction,
            isTransactionData,
            isFormEditMode,
            monthYearSelections,
            transactionTypeSelections,
            fromAccountSelections,
            toAccountSelections,

            validations,
            convertImageToBase64,
            setFormTransactionData,
            onAddTransaction,
            onEditTransaction,

            getTransactionFormValidation,
            getTransactionsState,
            getLoggedInUserState,
        };
    },
};
</script>
