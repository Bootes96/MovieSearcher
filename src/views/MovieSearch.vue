<template>
	<div>
		<h1 v-if="!movies.length" style="text-align: center">Movie was not found</h1>
		<div v-else-if="movies.length">
			<MovieCard :movies="movies"/>
			<Paginate 
				:page-count="totalPages"
				:click-handler="changePage"
				:prev-text="'<i class=material-icons>chevron_left</i>'"
				:prev-class="'waves-effect'"
				:next-text="'<i class=material-icons>chevron_right</i>'"
				:next-class="'waves-effect'"
				:container-class="'pagination'"
				:page-class="'waves-effect'"
				:active-class="'cyan lighten-2'"
			/>
	</div>
	<Preloader v-else/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import MovieCard from '@/components/MovieCard'
import Preloader from "@/components/Preloader"
export default {
	name: 'MovieSearch',
	computed: {
		movies() {
			return this.$store.state.search.searchMovies
		},
		totalPages() {
			return this.$store.state.search.totalPages
		}
	},
	methods: {
    async changePage(pageNum) {
      this.$store.commit('changeSearchPage', pageNum)
      await this.$store.dispatch('search')
      this.$router.push({path: window.location.search, query: {page: pageNum}})
    }
	},
	components: {
		MovieCard,
		Preloader
	}
}
</script>