// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import AV from './helpers/av'
import AOS from 'aos'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/layout.less'
import 'aos/dist/aos.css'
import {onElementHeightChange, scrollToComment} from './helpers/util'
import auth from './api/auth'
import Filter from './helpers/filter'

Vue.config.productionTip = false
Vue.use(ElementUI)
window.AV = AV
window.AOS = AOS

/* 第三方库初始化 */

AOS.init()

onElementHeightChange(document.body, function(){
  AOS.refresh()
  scrollToComment()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
