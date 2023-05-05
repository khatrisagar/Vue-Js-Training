<template>
  <base-card>
    <form @submit.prevent="onSubmit">
      <div>
        <div>
          <label for="post-title">Title</label>
          <input type="text" name="title" id="post-title" ref="title" />
        </div>

        <div>
          <label for="post-description">Description</label>
          <input
            type="text"
            name="description"
            id="post-description"
            ref="description"
          />
        </div>

        <div>
          <label for="post-link">Link</label>
          <input type="text" name="link" id="post-link" ref="link" />
        </div>
        <button @click.prevent="onSubmit">Add Post</button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  inject: ["addPost"],
  methods: {
    onSubmit() {
      const enteredTitle = this.$refs.title.value;
      const enteredDescription = this.$refs.description.value;
      const enteredLink = this.$refs.link.value;
      this.addPost(enteredTitle, enteredDescription, enteredLink);
    },
  },
};
</script>
