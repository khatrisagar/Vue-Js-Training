<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: rgb(49, 146, 231);
  border: 1px solid black;
  border-radius: 5px;
}
.secondaryBtn {
  background-color: black;
  color: white;
  border: 1px solid rgb(210, 243, 236);
  border-radius: 5px;
}
</style>
