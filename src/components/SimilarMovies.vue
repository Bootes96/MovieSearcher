<template>
  <div>
        <h4>Similar Movies</h4>
 		<div class="cards">
			<div class="card-wrapper" v-for="movie in similar" :key="movie.id">
				<div class="card">
					<div class="card-action">
						<a class="green-text text-darken-2" href="#">Add to Favorite</a>
						<i class="material-icons card-icon">favorite_border</i>
					</div>
					<div class="card-image" @click="$router.push(`/single/${movie.id}`)">
						<img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`">
					</div>
				</div>
				<a @click="$router.push(`/single/${movie.id}`)" class="card-title black-text">
					{{movie.title}}
				</a>
			</div>
		</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'SimilarMovie',
	props: ['similar']
}
</script>

<style lang="scss" scoped>
	.cards	{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		grid-column-gap: 1.5rem;
		grid-row-gap: 2rem;
		padding-bottom: 2rem;
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