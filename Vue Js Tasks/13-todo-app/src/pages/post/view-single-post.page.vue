<template>
  <h1>This is the single post</h1>
  <div v-if="!isLoader">
    <commonCard :post="getCurrentPost.postData" />

    <div>
      <p>comments</p>
      <commentsCard
        v-for="comment in getCurrentPost.commnetsData"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import commentsCard from "@/components/common/common-comment-card.component.vue";

// services
import { getPost, getPostComments } from "@/services/post/post.service";
import commonCard from "@/components/common/common-post-card.component.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    commentsCard,
    commonCard,
  },
  async created() {
    try {
      const postInfo = await Promise.all([
        getPost(this.$route.params.postId),
        getPostComments(this.$route.params.postId),
      ]);
      this.setCurrentPost({
        postData: postInfo[0].data,
        commnetsData: postInfo[1].data,
      });
      this.isLoader = false;
    } catch (error) {
      this.$router.push({ name: "404" });
    }
  },
  unmounted() {
    this.setCurrentPost({
      postData: {},
      commnetsData: {},
    });
  },
  data() {
    return {
      isLoader: true,
    };
  },
  methods: {
    ...mapActions({ setCurrentPost: "setCurrentPost" }),
  },
  computed: {
    ...mapGetters({ getCurrentPost: "getCurrentPost" }),
  },
};
</script>
