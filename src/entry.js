require("./style.css");
import Vue from 'vue';
import app from './app.vue';
export default new Vue({
  el: '#app',
  render: h => h(app),
});