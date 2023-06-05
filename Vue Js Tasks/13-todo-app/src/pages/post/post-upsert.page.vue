<template>
    <div class="d-flex flex-column align-center">
        <v-card width="500px" class="pa-3 bg-primary">
            <h2>Add Post</h2>

            <form @submit.prevent="">
                <v-Divider></v-Divider>
                <div class="mt-3">
                    <v-textarea
                        class="overflow-hidden pt-2"
                        no-resize
                        rows="2"
                        variant="outlined"
                        label="Title"
                        v-model="title"
                    ></v-textarea>

                    <v-textarea
                        class="overflow-hidden pt-2"
                        no-resize
                        rows="10"
                        auto-grow
                        variant="outlined"
                        label="Description"
                        v-model="body"
                    ></v-textarea>

                    <v-Divider></v-Divider>
                    <div v-if="!isFormEditMode" class="d-flex justify-center">
                        <v-Btn @click="addPost">Add Post</v-Btn>
                    </div>
                    <div v-if="isFormEditMode" class="d-flex justify-center">
                        <v-Btn @click="editPost(id)"> Save Edited Post </v-Btn>
                    </div>
                </div>
            </form>
        </v-card>
        <div v-if="isShowPopup">
            <corePopUp>
                <div class="post-alert-wrapper">
                    <p v-if="isErrorWarning">{{ errorMessage }}</p>
                    <p v-if="isShowSuccessMessage">
                        Post
                        {{ isFormEditMode ? "Updated" : "Added" }} Successfully
                    </p>
                </div>
            </corePopUp>
        </div>
    </div>
</template>

<script>
import { addNewPost, editExistingPost } from "@/services/post/post.service";
import corePopUp from "@/components/core/core-pop-up.component.vue";
import { mapActions, mapGetters } from "vuex";
import { setStore } from "@/utils";

export default {
    components: {
        corePopUp,
    },
    created() {
        this.setComponent(this.$route);
    },

    unmounted() {
        this.setCurrentPost({
            postData: {},
            commnetsData: {},
        });
    },
    data() {
        return {
            userId: null,
            id: null,
            title: null,
            body: null,
            errorMessage: null,
            isErrorWarning: false,
            isShowSuccessMessage: false,
            isShowPopup: false,
            isFormEditMode: false,
        };
    },

    methods: {
        ...mapActions({
            setPosts: "post/setPosts",
            setCurrentPost: "post/setCurrentPost",
        }),
        async addPost() {
            try {
                const dataObject = {
                    id: parseInt(new Date().getTime()),
                    userId: parseInt(new Date().getTime()),
                    title: this.title,
                    body: this.body,
                };
                const postData = await addNewPost(dataObject);
                this.title = null;
                this.body = null;
                if (postData?.status === 201) {
                    this.isShowPopup = true;
                    this.isShowSuccessMessage = true;

                    let posts = this.getPosts;

                    posts.unshift(dataObject);
                    this.setPosts(posts);

                    setTimeout(() => {
                        this.isShowPopup = false;
                        this.isShowSuccessMessage = false;
                        this.$router.push({
                            name: "posts",
                        });
                    }, 3000);
                }
            } catch (error) {
                this.isErrorWarning = true;
                this.isShowPopup = true;
                this.errorMessage = error.message;
                setTimeout(() => {
                    this.isShowPopup = false;
                    this.isErrorWarning = false;
                }, 3000);
            }
        },
        async editPost(postId) {
            try {
                const dataObject = {
                    id: this.id,
                    userId: this.userId,
                    title: this.title,
                    body: this.body,
                };
                const postData = await editExistingPost(this.id, dataObject);
                let posts = this.getPosts;
                console.log("postsssss", postData);
                if (postData?.status === 200) {
                    this.isShowPopup = true;
                    this.isShowSuccessMessage = true;
                    posts.forEach((post) => {
                        if (post.id == postId) {
                            post.title = this.title;
                            post.body = this.body;
                        }
                    });
                    this.setPosts(posts);
                    setTimeout(() => {
                        this.isShowPopup = false;
                        this.isShowSuccessMessage = false;
                        this.$router.push({
                            name: "post",
                            params: { postId: this.id },
                        });
                    }, 3000);
                }
            } catch (error) {
                this.isErrorWarning = true;
                this.isShowPopup = true;
                this.errorMessage = error.message;
                setTimeout(() => {
                    this.isShowPopup = false;
                    this.isErrorWarning = false;
                }, 3000);
            }
        },

        async setComponent(route) {
            await setStore();
            const postId = route?.params?.postId;
            console.log(postId);
            if (postId) {
                this.isFormEditMode = true;
                const post = this.getPosts.find((post) => {
                    return post.id == postId;
                });
                if (post) {
                    this.id = postId;
                    this.userId = post.userId;
                    this.title = post.title;
                    this.body = post.body;
                } else {
                    this.$router.push({ name: "404" });
                }
            } else {
                this.userId = null;
                this.id = null;
                this.title = null;
                this.body = null;
                this.isFormEditMode = false;
            }
        },
    },
    computed: {
        ...mapGetters({ getPosts: "post/getPosts" }),
    },
    watch: {
        $route(newRoute) {
            console.log(newRoute);
            this.setComponent(newRoute);
        },
    },
};
</script>

<style scoped>
input {
    width: 100%;
    border: 1px solid white;
}
textarea {
    width: 100%;
    height: 200px;
    resize: none;
}
.post-alert-wrapper {
    box-shadow: 0px 0px 3px black;
    border-radius: 4px;
    width: 400px;
    height: 200px;
    background-color: rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-element {
    gap: 0.3rem;
}
</style>
