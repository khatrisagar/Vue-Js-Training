<template>
  <div>
    <h2>Add Post</h2>

    <form @submit.prevent="">
      <div>
        <div>
          <label for="">Title</label>
          <input type="text" v-model="title" />
        </div>
        <div>
          <label for="">Body</label>
          <input type="text" v-model="body" />
        </div>

        <div v-if="!isFormEditMode">
          <button type="button" @click="addPost">Add Post</button>
        </div>
        <div v-if="isFormEditMode">
          <button type="button" @click="editPost(id)">Save Edited Post</button>
        </div>
      </div>
    </form>

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
export default {
  components: {
    corePopUp,
  },
  created() {
    const postId = this.$route?.params?.postId;
    if (postId) {
      this.isFormEditMode = true;
      const post = this.getPosts.find((post) => {
        return post.id == postId;
      });
      this.id = postId;
      this.userId = post.userId;
      this.title = post.title;
      this.body = post.body;
    }
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
    ...mapActions({ setPosts: "setPosts" }),
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
              params: { postId: parseInt(new Date().getTime()) },
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
  },
  computed: {
    ...mapGetters({ getPosts: "getPosts" }),
  },
};
</script>

<style scoped>
input {
  width: 500px;
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
</style>
