<template>
	<div>
		<Preloader v-if="loading"/>
		<div v-else>
    <h4>Similar Movies</h4>
 		<div class="cards">
			<div class="card-wrapper" v-for="movie in similar" :key="movie.id">
				<div class="card">
					<div class="card-action">
						<a @click="$func.addToFavorite(movie, $event)" class="green-text text-darken-2">ADD TO FAVORITES</a>
						<i class="material-icons card-icon">favorite</i>
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
  </div>
	</div>
</template>

<script>
import Preloader from './Preloader.vue'
export default {
  components: { Preloader },
	name: 'SimilarMovie',
	props: ['movieId'],
	data: function() {
		return { 
			loading: true,
			similar: [],
		}
	},
	mounted() {
		this.movies()
	},
	methods: {
		async movies() {
			const id = this.movieId
			const similarMovies = await this.$store.dispatch("fetchSimilarMovies", id)
			this.similar = similarMovies.slice(0, 6)
			this.loading = false
		}
	},
	watch: {
  '$route'(){
    this.movies()
  }
}
}
</script>

<style lang="scss" scoped>
</style>