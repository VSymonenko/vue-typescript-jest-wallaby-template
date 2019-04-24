import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);
const router = new Router({
  base: store.getters.language,
  mode: 'history',
});

export default router;
