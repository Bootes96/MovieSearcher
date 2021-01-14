<template>
	<div>
		<MovieCard :movies="movies"/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import MovieCard from '@/components/MovieCard'
export default {
	name: 'MovieSearch',
	computed: {
		movies() {
			return this.$store.state.search.searchMovies
		}
	},
	components: {
		MovieCard
	}
}
</script>