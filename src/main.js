import Vue from 'vue'
import App from './App.vue'


// ******* vue router integration *****
import VueRouter from 'vue-router'
//import routers file
import {routes} from './routes.js'
Vue.use(VueRouter)
const router = new VueRouter({
  routes // short for `routes: routes`
})





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
