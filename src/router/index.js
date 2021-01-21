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
    path: "/single/:id",
    name: "Single",
    meta: { layout: "default" },
    component: () => import("../views/Single.vue"),
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
  {
    path: "/search",
    redirect: "/",
  }, 
  {
    path: "/:catchAll(.*)",
    name: 'Not Found',
    component: () => import("../views/NotFound.vue")
  }
]

const router = new VueRouter({
  base: '/moviesearcher',
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})


export default router
