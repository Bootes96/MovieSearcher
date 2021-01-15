<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component> 
  </div>
</template>


<script>
import MainLayout from '@/layouts/MainLayout'
import DefaultLayout from '@/layouts/DefaultLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  },
  components: {
    MainLayout,
    DefaultLayout
  }
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import '~material-design-icons/iconfont/material-icons.css';
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    margin-top: 2rem;
  }

  .pagination {
    text-align: center;
    margin: 2rem 0 2rem 0;
  }
</style>
