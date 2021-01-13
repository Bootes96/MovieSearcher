<template>
  <div>
    <Navbar />
    <MovieCard :movies='movies.results'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import MovieCard from '@/components/MovieCard.vue'
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'Movies',
  components: {
    Navbar,
    MovieCard
  },
  async mounted() {
    const { with_genres } = this.$route.query
    const { sort_by } = this.$route.query
    const sort = sort_by || 'popularity.desc' 
    const genres = with_genres || ''
    this.$store.commit('sortBy', sort)
    this.$store.commit('changeGenres', genres) 
    await this.$store.dispatch('fetchMovies')
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
    //'$route' (to, from) {
      //console.log(to);
    //},
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
