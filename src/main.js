import Vue from 'vue'
import App from './App.vue'
//引入移动端适配库
import 'lib-flexible/flexible'
//引入路由器
import router from './router'
import * as API from './api'
import waterfall from 'vue-waterfall2'
import './veeValidate'

Vue.config.productionTip = false

Vue.prototype.$API = API

Vue.use(waterfall)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
