<template>
  <div>
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
  methods: {
    async changePage(pageNum) {
      this.$store.commit('changePage', pageNum)
      await this.$store.dispatch('fetchMovies')
      this.$router.push({path: window.location.search, query: {page: pageNum}})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>