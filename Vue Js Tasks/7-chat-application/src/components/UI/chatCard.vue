<template>
    <div class="card-wrapper">
        <input type="text" :value="chat.chatId" hidden />
        <small>{{ getUserName }}</small>
        <div class="chat-card">
            <p v-if="!isShowEdit" class="user-message">
                {{ chat.userMsg }}<small>{{ chat.time }}</small>
            </p>
            <input type="text" v-if="isShowEdit" v-model="userEditedMsg" />
        </div>
        <div class="extra-features" v-if="isFeatureVisible">
            <button
                v-if="chat.id === loggedInUserId"
                @click="deleteChat(chat.chatId)"
                class="delete-chat"
            >
                Delete
            </button>

            <button
                v-if="chat.id === loggedInUserId && !isShowEdit"
                @click="showEdit"
            >
                Edit
            </button>
        </div>

        <div v-if="isShowEdit">
            <button
                v-if="chat.id === loggedInUserId"
                @click="editChat(chat.chatId, userMsg)"
            >
                Save
            </button>
            <button v-if="chat.id === loggedInUserId" @click="cancelEdit">
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: null,
            isShowEdit: false,
            userEditedMsg: this.chat.userMsg,
            isFeatureVisible: true,
        };
    },
    props: {
        chat: {
            type: Object,
        },
        loggedInUserId: {
            type: Number,
        },
    },
    created() {
        this.userData = JSON.parse(localStorage.getItem("userData"));
    },
    methods: {
        getUser() {
            let userName;
            this.userData.forEach((user) => {
                if (user.id === this.chat.id) {
                    userName = user.firstName;
                }
            });
            return userName;
        },
        deleteChat(chatId) {
            // console.log(chatId);
            this.$emit("deleteChat", chatId);
        },
        showEdit() {
            this.isShowEdit = true;
            this.isFeatureVisible = false;
        },
        cancelEdit() {
            this.isShowEdit = false;
            this.isFeatureVisible = true;
        },
        editChat(chatId) {
            // console.log("edittt", this.userEditedMsg);
            this.$emit("editChat", chatId, this.userEditedMsg);

            this.isShowEdit = false;
            this.isFeatureVisible = true;
        },
        // setFeatureVisibility(isVisible) {
        //     this.isFeatureVisible = isVisible;
        //     console.log(this.isFeatureVisible);
        // },
    },
    computed: {
        getUserName() {
            return this.getUser();
        },
    },
};
</script>

<style scoped>
.card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.chat-card {
    display: inline-block;
    /* width: 200px; */
    border: 0.4px solid rgb(187, 187, 187);
    border-radius: 3px;
    padding: 4px;
}
.user-message {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>
