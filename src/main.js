import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios';

Vue.config.productionTip = false
//Vue.use(axios)
new Vue({
  vuetify,
  axios,
  router,
  render: h => h(App)
}).$mount('#app')


if (process.env.NODE_ENV == 'development') {
  Vue.BASE_URL = Vue.prototype.BASE_URL = '';
} else { // Production
  // Vue.BASE_URL = Vue.prototype.BASE_URL = '';
  Vue.BASE_URL = Vue.prototype.BASE_URL = 'E:/STAGE/GESTION DU PROJET/back_end/';
}