// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/layout.css'
import './assets/css/lottery.css'
import './assets/js/jquery.min'
Vue.config.productionTip = false
$(window).resize(function () {
  window.location = window.location
  // window.location.reload()
  // console.log(1)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
