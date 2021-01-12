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
    const sort = this.$route.fullPath.split('?')[1] || 'popularity.desc' //Чтобы не терять данные при передаче по ссылке 
    this.$store.commit('sortBy', sort) 
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
