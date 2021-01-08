import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/favorites',
    name: 'Favorites',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Favorites.vue')
  },
  {
    path: '/single',
    name: 'Single',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Single.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
