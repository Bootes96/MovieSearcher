import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import Paginate from 'vuejs-paginate'
import {func} from './utils/addToFavorite'

Vue.component('Paginate', Paginate)
Vue.prototype.$func = func

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
