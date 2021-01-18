import axios from 'axios'

const KEY = process.env.VUE_APP_API_KEY

export default {
  state: {
		searchQuery: '',
		searchMovies: null,
		page: 1,
		totalResults: 0,
		totalPages: 0
	},
	mutations: {
		setSearchQuery: (state, searchQuery) => (state.searchQuery = searchQuery), //поисковый запрос
		setSearchMovies: (state, data) => {
    	state.searchMovies = data.results
	  	state.totalResults = data.total_results
	  	state.totalPages = data.total_pages
		}, //найденные фильмы
		resetSearchMovies: (state) => (state.searchMovies = []),
		changeSearchPage: (state, pageNum) => (state.page = pageNum)
	},
	actions: {
		setSearchQuery({ commit }, searchQuery) {
      commit("setSearchQuery", searchQuery)
    },
		async search({commit, state}) {
			try {
				const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${state.searchQuery}&page=${state.page}&include_adult=false`)
				commit('setSearchMovies', res.data)
			} catch (error) {
				throw new Error(error)
			}
		}
	},
}