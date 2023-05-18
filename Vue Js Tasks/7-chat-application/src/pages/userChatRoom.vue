<template>
    <div class="chatroom-wrappper">
        <div class="read-chat-container" ref="chatContainer">
            <div
                v-for="chat in withFriendChat"
                :key="chat.id"
                :style="{
                    alignSelf:
                        chat.id == loggedInUserId ? 'flex-end' : 'flex-start',
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
            loggedInUserId: null,
            // all chat data object
            userChats: null,
            withFriendChat: null,
        };
    },
    created() {
        this.userChats = JSON.parse(localStorage.getItem("userChats")) || [];
        this.loggedInUserId =
            JSON.parse(localStorage.getItem("user_at")).id || null;
        this.withFriendChat = this.userChats.filter(
            (chat) =>
                (chat.id == this.loggedInUserId ||
                    chat.id == parseInt(this.$route.params.id)) &&
                (chat.friendID == parseInt(this.$route.params.id) ||
                    chat.friendID == this.loggedInUserId)
        );
    },
    methods: {
        setMessage() {
            localStorage.setItem("userChats", JSON.stringify(this.userChats));
            this.withFriendChat = this.userChats.filter(
                (chat) =>
                    (chat.id == this.loggedInUserId ||
                        chat.id == parseInt(this.$route.params.id)) &&
                    (chat.friendID == parseInt(this.$route.params.id) ||
                        chat.friendID == this.loggedInUserId)
            );
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
                id: this.loggedInUserId,
                friendID: parseInt(this.$route.params.id),
                userMsg: this.userMessage,
            });

            this.userMessage = null;
            this.autoReply();
            this.setMessage();
        },
        autoReply() {
            const listOfReplies = [
                "Hello",
                "Have a Good day",
                "Bye Bye",
                "ABC",
                "XYZ",
            ];
            setTimeout(() => {
                this.userChats.push({
                    id: parseInt(this.$route.params.id),
                    friendID: this.loggedInUserId,
                    userMsg:
                        listOfReplies[
                            Math.floor(Math.random() * listOfReplies.length)
                        ],
                });

                this.setMessage();
            }, 3000);
        },
    },
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
