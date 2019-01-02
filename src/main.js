import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'styles/iconfont.css'
import 'babel-polyfill'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import BaiduMap from 'vue-baidu-map'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(BaiduMap,{
  ak:"5bS8bGXOSk92t4gpnuGfml4SIv5H8aG6"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
