import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    // data: []
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status)
    },
    // getList(context) {
    //   const api = process.env.API_PATH;
    //   context.commit('LOADING', true)
		// 	axios.get(api).then((response) => {
    //     context.commit('DATA', response.data);
    //     context.commit('LOADING', false);
    //   });
        // await axios.get(api).then((response) => {
        //   context.commit('DATA', response.data);
        //   context.commit('LOADING', false);
        //   console.log(this.data)
        // });
		// },

  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    }
    // DATA(state, payload) {
    //   state.data = payload;
    // }
  // },
  // getters: {
  //   data(state) {
  //     return state.data;
  //   }
  }
})
