<template>
  <div>
    <Navbar />
    <MovieCard />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import MovieCard from '../components/MovieCard'

export default {
  name: 'Favorites',
  components: {
    Navbar,
    MovieCard
  }
}
</script>
