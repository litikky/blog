import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload' 

import toast from 'components/common/toast'

Vue.use(toast)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// 解决移动端300毫秒延迟问题。初始化FastClick实例。在页面的DOM文档加载完成后
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')