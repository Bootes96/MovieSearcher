<template>
	<form class="search-form">
		<div class="input-field">
			<input id="search" 
				type="search"
				v-model="query"
				@input="debouncedSearch"
			>
			<label class="label-icon" for="search"><i class="material-icons">search</i></label>
			<i class="material-icons">close</i>
		</div>
  </form>
</template>

<script>
import debounce from "lodash/debounce"
import { mapActions, mapState } from 'vuex'
export default {
	name: 'Search',
	computed: {
		...mapState(['searchQuery', 'searchMovies']),
		query: {
		get() {
			return this.$store.state.search.searchQuery
		},
		set(val) {
			return this.setSearchQuery(val)
		}
		}
	},
	methods: {
		...mapActions(['setSearchQuery', 'search']),
		debouncedSearch: debounce(function() {
			this.$router.push('/search/' + this.query)
			this.search()
		}, 500)
	}
}
</script>

<style lang="scss" scoped>
	.input-field {
    height: 64px;
  }

  #search {
    height: 100%;
  }
</style> 