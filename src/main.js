import Vue from 'vue'
import App from './App.vue'

//vuex install
import {store} from './store/store.js'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// ******* vue router integration *****
import VueRouter from 'vue-router'
//import routers file
import {routes} from './routes.js'
Vue.use(VueRouter)
const router = new VueRouter({
  routes ,
  mode: 'history'
})

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost/1_zubayer_lara_ecom_api/public/api';








Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store:store
}).$mount('#app')
