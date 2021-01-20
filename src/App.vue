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

  .cards	{
    width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 1.5rem;
		grid-row-gap: 2rem;
	}
	.card {
		&-title {
			font-weight: bold;
			font-size: 1.5rem;
			position: relative;
			text-align: center;
			cursor: pointer;
		}
    &-image {
      img {
        min-height: 389px;
        object-fit: cover;
      }
	    min-height: 435px;
    }
		&-action {
			display: flex;
			justify-content: space-between;
			a {
				cursor: pointer;
			}
		}
	}

  @media (min-width: 762px) and (max-width: 1199px) {
  .cards	{
    width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1.5rem;
		grid-row-gap: 2rem;
	}
}

@media (max-width: 761px) {
  .container {
    max-width: 320px;
    width: 320px;
    overflow: hidden;
  }
  .cards	{
    width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-column-gap: 1.5rem;
		grid-row-gap: 2rem;
	}
  .card {
    max-width: 350px;
    margin: 0 auto;
    &-title {
      display: block;
      font-size: 1rem;
			position: relative;
			text-align: center;
			cursor: default;
		}
  }
}
</style>
