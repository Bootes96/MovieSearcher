<template>
	<div class="container">
		<div class="cards" v-if="movies.length">
			<div class="card-wrapper" v-for="movie in movies" :key="movie.id">
				<div class="card">
					<div class="card-action">
						<a @click="removeFavs(movie, $event)" class="green-text text-darken-2" ref="favorite">REMOVE FROM FAVORITES</a>
						<i class="material-icons card-icon red-text">favorite</i>
					</div>
					<div class="card-image" @click="$router.push(`/single/${movie.id}`)">
						<img v-if="!movie.poster_path" src="../assets/no-image.jpg" alt="movie poster"/>
						<img v-else :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="movie poster"/>
					</div>
				</div>
				<a @click="$router.push(`/single/${movie.id}`)" class="card-title black-text">
					{{movie.title}}
				</a>
			</div>
		</div>
    <h1 v-else>There are no movies here</h1>
	</div>
</template>

<script>
import MovieCard from '../components/MovieCard'

export default {
  name: 'Favorites',
  data: () => ({
    movies: []
  }),
  components: {
    MovieCard
  },
  mounted() {
    this.movies = JSON.parse(localStorage.getItem('movies'))
  },
  methods: {
    removeFavs(movie, event) {
      const {id} = movie
      const storageMovies = JSON.parse(localStorage.getItem('movies'))
      storageMovies.forEach(element => {
        if(element.id === id) {
          storageMovies.splice(element, 1)
          localStorage.setItem('movies', JSON.stringify(storageMovies))
          this.movies = JSON.parse(localStorage.getItem('movies'))
        }
      });  
    }
  },
}
</script>
