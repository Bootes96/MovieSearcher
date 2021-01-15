import axios from 'axios'
import _ from 'lodash'

const KEY = process.env.VUE_APP_API_KEY

export default {
	state: {
		movie: [],
		movieCast: []
	},
	mutations: {
		setMovieData: (state, result) => (state.movie = result),
		setMovieCast: (state, result) => (state.movieCast = result)
 	},
	actions: {
		async fetchMovieById({commit}, id) {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
			commit('setMovieData', res.data)
		},
		async fetchMovieCast({commit}, id) {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&append_to_response=credits`)
			commit('setMovieCast', res.data)
		}
	},
	getters: {
		movieDetails(state) {
      return state.movie
		},
		movieDirector(state) { 
			 const director = _.filter(state.movieCast.credits.crew, function(item) {
        return item.job === "Director"
			}); //ищем режиссера фильма
			return director[0].name
		},
		mainActors(state) {
			return state.movieCast.credits.cast.slice(0, 8)
		} 
	}
}