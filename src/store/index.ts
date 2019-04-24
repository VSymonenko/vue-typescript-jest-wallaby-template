import Vuex from 'vuex';
import Vue from 'vue';
import settings from './modules/settings';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    settings,
  },
});

export default store;
