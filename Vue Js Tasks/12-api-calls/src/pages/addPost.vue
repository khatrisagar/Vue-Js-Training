<template>
    <div>
        <h2>Add Post</h2>

        <form @submit.prevent="onSubmit">
            <div>
                <div>
                    <label for="">UserId</label>
                    <input type="text" v-model="userId" />
                </div>
                <div>
                    <label for="">Title</label>
                    <input type="text" v-model="title" />
                </div>
                <div>
                    <label for="">Body</label>
                    <input type="text" v-model="body" />
                </div>
                <p v-if="isShowSuccessMessage">Post Added Successfully</p>
                <p v-if="isErrorWarning">{{ errorMessage }}</p>
                <div><button>Add Post</button></div>
            </div>
        </form>
    </div>
</template>

<script>
import { addPost } from "@/services/posts";
export default {
    data() {
        return {
            userId: null,
            title: null,
            body: null,
            isErrorWarning: false,
            errorMessage: null,
            isShowSuccessMessage: false,
        };
    },
    methods: {
        async onSubmit() {
            try {
                const dataObject = {
                    userId: this.userId,
                    title: this.title,
                    body: this.body,
                };
                const postData = await addPost(dataObject);

                this.userId = null;
                this.title = null;
                this.body = null;
                if (postData.status === 201) {
                    this.isShowSuccessMessage = true;
                    setTimeout(() => {
                        this.isShowSuccessMessage = false;
                    }, 1000);
                }
            } catch (error) {
                this.isErrorWarning = true;
                this.errorMessage = error.message;
            }
        },
    },
};
</script>
