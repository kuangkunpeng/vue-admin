// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import  http from './api/index.js'
import iView from 'iview'

import 'iview/dist/styles/iview.css' // 使用 CSS
import 'vue2-animate/dist/vue2-animate.min.css';
import './assets/styles/layout/layout.less' // 引入布局样式
import './assets/styles/cover/cover.less' // 覆盖样式
import './assets/styles/base/base.less'
import './assets/styles/style.less'
import './assets/styles/animate.css'
Vue.use(iView);
Vue.use(http);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
