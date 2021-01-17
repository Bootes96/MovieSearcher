<template>
  <div class="app-loader">
    <div id="app">
      <LetterCube class="cube"></LetterCube>
    </div>
  </div>
</template>

<script>
import { LetterCube } from "vue-loading-spinner"
export default {
  components: {
    LetterCube,
  },
}
</script>

<style lang="scss">
  .spinner.spinner--socker.cube {
    width: 400px !important;
    height: 300px !important;
    margin: 0 auto;
    margin-top: 100px;
  }
  .spinner-inner {
    transform: scale(1.2) !important;
  }
</style>