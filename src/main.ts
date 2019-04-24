import Vue from 'vue';

import App from '@/app';
import router from '@/router';
import store from '@/store';
import VueI18n from 'vue-i18n';

import { messages } from '@/locales';
import '@/plugins/vuetify';
import '@/registerServiceWorker';

// import vuetify style
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(VueI18n);

// Create VueI18n instance with options TODO: approve this
const i18n = new VueI18n({
  locale: 'uk', // set default locale to Ukrainian
  fallbackLocale: 'en',
  messages, // set locale messages
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
