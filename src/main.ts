import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import lang from 'element-ui/lib/locale/lang/tr-TR'
//import locale from 'element-ui/lib/locale'

Vue.config.productionTip = false

Vue.use(ElementUI);
//locale.use(lang)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
