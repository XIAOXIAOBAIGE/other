// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { LuckyWheel, LuckyGrid } from 'vue-luck-draw'
Vue.config.productionTip = false
// 按需引入
import LuckDraw from 'vue-luck-draw'
Vue.use(LuckDraw)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
