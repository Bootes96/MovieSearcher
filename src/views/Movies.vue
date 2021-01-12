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
    await this.$store.dispatch('fetchMovies')
  },
  computed: {
    ...mapGetters(['movies']),
    ...mapState(['sort']),
    sortedMovies() {
      return this.sort
    }
  },
  watch: {
    async sortedMovies() {
      try {
        await this.$store.dispatch('fetchMovies')
      } catch (error) {
        
      }
    }
  }
}
</script>
