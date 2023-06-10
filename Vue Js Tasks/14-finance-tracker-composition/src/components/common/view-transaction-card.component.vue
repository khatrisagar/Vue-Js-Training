<template>
    <v-container class="d-flex align-center" v-if="isCollaboratorContainer">
        <v-container>
            <v-text-field
                label="Email address"
                v-model="collaboratorEmail"
                type="email"
                hide-details="auto"
            ></v-text-field>
            <p v-if="collaboratorWarning" class="text-red">
                {{ collaboratorWarning }}
            </p>
        </v-container>
        <v-Btn class="ml-5" @click="addCollaborator">Add Collaborator</v-Btn>
    </v-container>
    <v-sheet
        :elevation="5"
        border
        rounded
        class="ma-10 py-5 d-flex justify-center"
    >
        <v-table class="w-75 d-flex justify-center">
            <thead class="text-h5">
                <tr>
                    <th>Transaction Id</th>
                    <th>{{ transaction.id }}</th>
                </tr>
            </thead>
            <tbody class="text-subtitle-1">
                <tr>
                    <td>Transaction Date</td>
                    <td>{{ transaction.transactionDate }}</td>
                </tr>
                <tr>
                    <td>Month Year</td>
                    <td>{{ transaction.monthYear }}</td>
                </tr>
                <tr>
                    <td>Transaction Type</td>
                    <td>{{ transaction.transactionType }}</td>
                </tr>
                <tr>
                    <td>From Account</td>
                    <td>{{ transaction.fromAccount }}</td>
                </tr>
                <tr>
                    <td>To Account</td>
                    <td>{{ transaction.toAccount }}</td>
                </tr>
                <tr>
                    <td>Amount</td>
                    <td>{{ transaction.amount }}</td>
                </tr>
                <tr>
                    <td>Receipt</td>
                    <td>
                        <v-img
                            :width="400"
                            aspect-ratio="16/9"
                            cover
                            :src="transaction.receipt.image"
                        ></v-img>
                    </td>
                </tr>
                <tr>
                    <td>Notes</td>
                    <td>{{ transaction.notes }}</td>
                </tr>
            </tbody>
        </v-table>
        <router-link
            :to="{
                name: 'editTransaction',
                params: { transactionId: transaction.id },
            }"
            ><v-Btn>Edit</v-Btn></router-link
        >
        <v-Btn @click="showCollaboratorContainer" class="ml-2">Share</v-Btn>
    </v-sheet>
</template>

<script>
import { ref } from "vue";

import {
    getTransactionFromLocalStorage,
    setTransactionsToLocalStorage,
    getUsersFromLocalStorage,
} from "@/services";

export default {
    props: {
        transaction: {
            type: Object,
        },
    },
    setup(props) {
        const collaboratorEmail = ref(null);
        const isCollaboratorContainer = ref(false);
        const collaboratorWarning = ref(null);

        const showCollaboratorContainer = () => {
            isCollaboratorContainer.value = true;
        };

        const addCollaborator = () => {
            const transactions = getTransactionFromLocalStorage();
            const transaction = transactions.find(
                (transaction) => transaction.id === props.transaction.id
            );
            const user = getUsersFromLocalStorage().find(
                (user) => user.email === collaboratorEmail.value
            );
            if (user) {
                if (!transaction.users.includes(user.id)) {
                    transaction.users.push(user.id);
                    collaboratorWarning.value = null;
                    collaboratorEmail.value = null;
                    setTransactionsToLocalStorage(transactions);
                } else {
                    collaboratorWarning.value = "User Already Exist";
                }
            } else {
                collaboratorWarning.value = "User Doesn't Exist";
            }
        };

        return {
            collaboratorEmail,
            isCollaboratorContainer,
            collaboratorWarning,
            showCollaboratorContainer,
            addCollaborator,
        };
    },

    methods: {},
};
</script>
