import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity = '北京';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  console.error(e);
}
export default new Vuex.Store({
  state: {
    city: localStorage.city || defaultCity,
  },
  getters: {},
  mutations: {
    changeCity(state, city) {
      try {
        localStorage.city = city;
        state.city = city;
      } catch (error) {
        console.error(error);
      }
    },
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit('changeCity', city);
    },
  },
  modules: {},
});
