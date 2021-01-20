<template>
	<div class="container">
		<div class="cards">
			<div class="card-wrapper" v-for="movie in movies" :key="movie.id">
				<div class="card">
					<div class="card-action">
						<a @click="$func.addToFavorite(movie, $event)" class="green-text text-darken-2" ref="favorite">ADD TO FAVORITES</a>
						<i class="material-icons card-icon">favorite</i>
					</div>
					<div class="card-image" @click="$router.push(`/single/${movie.id}`)">
						<img v-if="!movie.poster_path" src="../assets/no-image.jpg"/>
						<picture v-else>
							<source :srcset="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" media='(min-width: 1300px)'/>
							<img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="poster">
						</picture>
					</div>
				</div>
				<a @click="$router.push(`/single/${movie.id}`)" class="card-title black-text">
					{{movie.title}} <span>({{movieRelease(movie.release_date)}})</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'MovieCard',
	props:['movies'],
	methods: {
		movieRelease(date) {
			if(date) {
				return date.split('-')[0]
			} else {
				return 'unknown'
			}
		},
	},
}
</script>

<style lang="scss" scoped>
</style>