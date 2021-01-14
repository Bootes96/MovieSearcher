import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movies',
    meta: { layout: "main" },
    component: Movies
  },
  {
    path: '/favorites',
    name: 'Favorites',
    meta: { layout: "default" },
    component: () => import('../views/Favorites.vue')
  },
  {
    path: '/single',
    name: 'Single',
    meta: { layout: "default" },
    component: () => import('../views/Single.vue')
  },
  {
    path: "/search/:query",
    name: "MovieSearch",
    meta: { layout: "main" },
    component: () => import("../views/MovieSearch.vue"),
  },
]

const router = new VueRouter({
  base: '/moviesearcher',
  mode: 'history',
  routes
})

export default router
