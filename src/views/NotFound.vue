<template>
  <div class="container">
    <h1 class="not-found__title">Page not found</h1>
    <p class="not-found__text">404</p>
    <div class="img-wrapper">
      <img src="../assets/house.jpg" alt="not found">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
  img {
    display: block;
    margin: 0 auto;
    height: auto;
    width: 600px;
    object-fit: cover;
  }

  .not-found {
    &__title {
      text-align: center;
      margin: 0;
    }
    &__text {
      font-size: 5rem;
      text-align: center;
    }
  }

  @media (max-width: 761px) {
      img {
    display: block;
    margin: 0 auto;
    max-width: 320px;
    object-fit: cover;
    }
  }
</style>