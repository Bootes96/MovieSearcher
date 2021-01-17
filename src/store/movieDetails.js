import axios from 'axios'
import _ from 'lodash'

const KEY = process.env.VUE_APP_API_KEY

export default {
	state: {
		similarMovies: []
	},
	mutations: {
		setSimilarMovies: (state, result) => (state.similarMovies = result)
 	},
	actions: {
		async fetchMovieById({commit}, id) {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
			return res.data
		},
		async fetchMovieCast({commit}, id) {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&append_to_response=credits`)
			return res.data.credits
		},
		async fetchSimilarMovies({commit}, id) {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${KEY}&language=en-US&page=1`)
			return res.data.results
		}
	},
	getters: {
		movieDetails(state) {
      return state.movie
		},
	}
}