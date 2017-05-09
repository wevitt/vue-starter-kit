import Vue from 'vue';
import VueAxios from 'vue-axios'
import { axios } from './axios'
Vue.use(VueAxios, axios)

import { store } from './vuex/store.js'
import { router } from './router.js'

import app from './app.vue';

export default new Vue({
  el: '#app',
  store, 
  router,
  render: h => h(app)
});