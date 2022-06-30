import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
