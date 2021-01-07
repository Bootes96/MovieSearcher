<template>
  <div>
    <Navbar />
    <MovieCard />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Movies',
  components: {
    Navbar,
    MovieCard
  }
}
</script>
