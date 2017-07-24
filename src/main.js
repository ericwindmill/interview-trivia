// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'
import App from './App'
Vue.use(VueFire)
Vue.use(VueHighlightJS)
Vue.config.productionTip = true

export const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
