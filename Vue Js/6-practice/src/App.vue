<template>
  <the-post></the-post>
</template>

<script>
import ThePost from "./components/posts-data/ThePost.vue";
export default {
  name: "App",
  components: { ThePost },
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
