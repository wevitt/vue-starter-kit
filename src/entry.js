import Vue from 'vue';

import { router } from './router.js'

import app from './app.vue';

export default new Vue({
  el: '#app',
  router,
  render: h => h(app)
});