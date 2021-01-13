import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const KEY = process.env.VUE_APP_API_KEY

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    sort: '',
    genres: '',
    page: '',
  },
  mutations: {
    setMovies: (state, data) => (state.movies = data),
    sortBy: (state, sort) => (state.sort = sort),
    changeGenres: (state, genres) => (state.genres = genres),
    changePage: (state, pageNum) => (state.page = pageNum)
  },
  actions: {
    async fetchMovies({commit, state}) {
      try {
        const result = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=${state.sort}&include_adult=false&include_video=false&page=${state.page}&with_genres=${state.genres}`)
        commit('setMovies', result.data)
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  getters: {
    movies(state) {
      return state.movies
    },
    totalPages(state) {
      return state.movies.total_pages
    }
  },
  modules: {
  }
})
