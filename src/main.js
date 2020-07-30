import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.scss'

import App from './App';
import router from './router';
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'

window.Vue = require('vue');

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper);
Vue.use(infiniteScroll)
Vue.component('Loading', Loading);

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
