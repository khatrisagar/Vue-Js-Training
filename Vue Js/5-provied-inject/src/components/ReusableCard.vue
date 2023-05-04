<template>
  <div class="card-wrapper">
    <slot name="card"> </slot>
  </div>
</template>



<style scoped>
    .card-wrapper{
        border: 1px solid black;
        border-radius: 8px;
        box-shadow:  0px 0px 2px black;
    }
    ::v-deep h1{
        color: yellow;
    }
</style>