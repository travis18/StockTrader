import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from "./routes";

//install VueRouter to Vue
Vue.use(VueRouter)

//setup routes to VueRouter
var router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
