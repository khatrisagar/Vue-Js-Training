<template>
    <div class="chatroom-wrappper">
        <div class="read-chat-container" ref="chatContainer">
            <div
                v-for="chat in chats"
                :key="chat.id"
                :style="{
                    alignSelf:
                        chat.id == loggedInUserId ? 'flex-end' : 'flex-start',
                }"
            >
                {{}}
                <chatCard
                    :chat="chat"
                    :loggedInUserId="loggedInUserId"
                    @deleteChat="deleteChat"
                    @editChat="editChat"
                />
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
            // filter messages
            chats: null,
        };
    },
    mounted() {
        this.userChats = JSON.parse(localStorage.getItem("userChats")) || [];
        this.loggedInUserId =
            JSON.parse(localStorage.getItem("user_at"))?.id || null;
        this.updateChats();
    },
    methods: {
        sendMessage() {
            const userChatObject = {
                chatId: new Date().getTime(),
                id: this.loggedInUserId,
                userMsg: this.userMessage,
                time: new Date().toLocaleTimeString(),
            };

            if (this.userMessage === "" || !this.userMessage) {
                return;
            }
            if (this.$route.params.id) {
                this.userChats.push({
                    ...userChatObject,
                    friendID: parseInt(this.$route.params.id),
                });

                this.autoReply();
            } else if (this.$route.params.groupId) {
                this.userChats.push({
                    ...userChatObject,
                    groupId: parseInt(this.$route.params.groupId),
                });
            }
            this.userMessage = null;
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
                    chatId: new Date().getTime(),
                    id: parseInt(this.$route.params.id),
                    friendID: this.loggedInUserId,

                    userMsg:
                        listOfReplies[
                            Math.floor(Math.random() * listOfReplies.length)
                        ],

                    time: new Date().toLocaleTimeString(),
                });

                this.setMessage();
            }, 3000);
        },
        setMessage() {
            this.updateChats();
            localStorage.setItem("userChats", JSON.stringify(this.userChats));
        },
        deleteChat(chatId) {
            const chatIndex = this.userChats.findIndex((chat) => {
                return parseInt(chat.chatId) === parseInt(chatId);
            });
            console.log(chatIndex);
            this.userChats.splice(chatIndex, 1);
            this.setMessage();
        },
        editChat(chatId, userMsg) {
            const chatIndex = this.userChats.findIndex((chat) => {
                return parseInt(chat.chatId) === parseInt(chatId);
            });
            console.log(chatIndex);
            this.userChats[chatIndex].userMsg = userMsg;
            this.userChats[chatIndex].time = new Date().toLocaleTimeString();
            this.setMessage();
        },

        updateChats() {
            if (this.$route.params.id) {
                this.chats = this.userChats.filter(
                    (chat) =>
                        (chat.id == this.loggedInUserId ||
                            chat.id == parseInt(this.$route.params.id)) &&
                        (chat.friendID == parseInt(this.$route.params.id) ||
                            chat.friendID == this.loggedInUserId)
                );
            } else if (this.$route.params.groupId) {
                this.chats = this.userChats.filter(
                    (chat) =>
                        chat.groupId === parseInt(this.$route.params.groupId)
                );
            }
            setTimeout(() => {
                this.$refs.chatContainer.scrollTo(
                    0,
                    this.$refs.chatContainer.scrollHeight
                );
            }, 0);
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
