<template>
	<div class="container">
		<div class="cards">
			<div class="card-wrapper" v-for="movie in movies" :key="movie.id">
				<div class="card">
					<div class="card-action">
						<a class="green-text text-darken-2" href="#">Add to Favorite</a>
						<i class="material-icons card-icon">favorite_border</i>
					</div>
					<div class="card-image">
						<img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`">
					</div>
				</div>
				<a href="#" class="card-title black-text">
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
			return date.split('-')[0]
		}
	}
}
</script>

<style lang="scss" scoped>
	.cards	{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		grid-column-gap: 1.5rem;
		grid-row-gap: 2rem;
	}
	.card {
		&-title {
			font-weight: bold;
			font-size: 1.5rem;
			position: relative;
			text-align: center;
		}
		&-action {
			display: flex;
			justify-content: space-between;
		}
	}
</style>