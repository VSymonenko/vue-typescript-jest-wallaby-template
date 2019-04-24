import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import settings from './modules/settings';
import mainPage from './modules/mainPage';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    settings,
  },
});

export default store;
