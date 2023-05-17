<template>
    <div class="chatroom-wrappper">
        <div class="read-chat-container" ref="chatContainer">
            <div
                v-for="chat in userChats"
                :key="chat.id"
                :style="{
                    alignSelf: chat.id == userId ? 'flex-end' : 'flex-start',
                }"
            >
                <chatCard :userMsg="chat.userMsg" />
            </div>
        </div>
        <div class="typing-area">
            <form @submit.prevent="sendMessage">
                <input class="form-input" type="text" v-model="userMessage" />
                <button class="form-button" type="submit">Send</button>
            </form>
        </div>
    </div>
</template>

<script>
import chatCard from "@/components/UI/chatCard.vue";
export default {
    components: {
        chatCard,
    },
    data() {
        return {
            // single message through v-model
            userMessage: null,
            // from localstorage as a token to identify user
            userId: null,
            // all chat data object
            userChats: null,
        };
    },
    created() {
        this.userChats = JSON.parse(localStorage.getItem("userChats")) || [];
        this.userId = JSON.parse(localStorage.getItem("user_at")).id || "1";
    },
    methods: {
        setMessage() {
            localStorage.setItem("userChats", JSON.stringify(this.userChats));
            this.$refs.chatContainer.scrollTo(
                0,
                this.$refs.chatContainer.scrollHeight
            );
        },
        sendMessage() {
            if (this.userMessage === "" || !this.userMessage) {
                return;
            }
            this.userChats.push({
                id: this.userId,
                userMsg: this.userMessage,
            });

            this.userMessage = null;
            this.autoReply();
            this.setMessage();
        },
        autoReply() {
            setTimeout(() => {
                this.userChats.push({
                    userID: "2",
                    userMsg: "fjksda dfhds dfhsjk",
                });

                this.setMessage();
            }, 3000);
        },
    },
    computed: {},
};
</script>

<style scoped>
.typing-area {
    position: absolute;
    bottom: 2rem;
    display: block;
    width: 100%;
}
.form-input {
    width: 90%;
}
.form-button {
    width: 10%;
}
.read-chat-container {
    padding: 1rem;
    box-shadow: 0px 0px 3px 1px black;
    height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: scroll;
}
</style>
