<template>
  <div>
    <Preloader v-if="loading"/>
    <div v-else>
      <MovieCard :movies='movies.results'/>
      <Pagination v-if="movies.total_pages" :totalPages="movies.total_pages"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'
import {mapGetters, mapState} from 'vuex'
import Pagination from '../components/Pagination.vue'
import Preloader from '../components/Preloader.vue'

export default {
  name: 'Movies',
  data: function() {
    return {
      loading: true
    }
  },
  components: {
    MovieCard,
    Pagination,
    Preloader
  },
  async mounted() {
    const { sort_by } = this.$route.query
    const { with_genres } = this.$route.query
    const { page } = this.$route.query
    const sort = sort_by || 'popularity.desc' 
    const genres = with_genres || ''
    const currentPage = page || 1
    this.$store.commit('sortBy', sort)
    this.$store.commit('changeGenres', genres)
    this.$store.commit('changePage', currentPage) 
    await this.$store.dispatch('fetchMovies')
    this.loading = false
  },
  computed: {
    ...mapGetters(['movies']),
    ...mapState(['sort', 'genres']),
    sortedMovies() {
      return this.sort
    },
    changedGenres() {
      return this.genres
    }
  },
  watch: {
    async sortedMovies() {
      try {
        await this.$store.dispatch('fetchMovies')
      } catch (error) {
        throw new Error(error)        
      }
    },
    async changedGenres() {
      try {
        await this.$store.dispatch('fetchMovies')
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>
