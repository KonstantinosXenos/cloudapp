import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false


Vue.use({
  install(Vue) {
    axios.xsrfCookieName = 'csrftoken'
    axios.xsrfHeaderName = "X-CSRFTOKEN"
    Vue.prototype.$api = axios.create({ baseURL: 'http://localhost:8000/', withCredentials: true, })

  }
})



new Vue({
  render: h => h(App),
}).$mount('#app')
