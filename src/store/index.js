import Vue from 'vue';
import Vuex from 'vuex';
import state from './state/state';
import mutations from './mutations/mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions: {
  },
  modules: {
  },
});
