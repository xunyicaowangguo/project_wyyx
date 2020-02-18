import Vue from 'vue'
import App from './App.vue'
//引入移动端适配库
import 'lib-flexible/flexible'
//引入路由器
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
