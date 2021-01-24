<template>
  <div :key="componentKey">
    <Paginate 
      :page-count="totalPages"
      :prev-text="'<i class=material-icons>chevron_left</i>'"
      :click-handler="changePage"
      :prev-class="'waves-effect'"
      :next-text="'<i class=material-icons>chevron_right</i>'"
      :next-class="'waves-effect'"
      :container-class="'pagination'"
      :page-class="'waves-effect'"
      :active-class="'cyan lighten-2'"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Pagination',
  props: ['totalPages'],
  data: function() {
    return {
      componentKey: 0
    }
  },
  methods: {
    async changePage(pageNum) {
      this.$store.commit('changePage', pageNum)
      await this.$store.dispatch('fetchMovies')
      this.$router.push({path: window.location.search, query: {page: pageNum}})
    }
  },
  watch: {
    '$route'() {
      if(!this.$route.query.page) {
        this.componentKey += 1
        this.changePage('1')
      }    
    }
  }
}
</script>

<style lang="scss" scoped>
</style>