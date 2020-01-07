import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core' 
import { faLevelUpAlt,faCloudUploadAlt,faFolderOpen,faFilePdf } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLevelUpAlt,faCloudUploadAlt,faFolderOpen,faFilePdf)


Vue.component('font-awesome-icon', FontAwesomeIcon)

import Meta from 'vue-meta';
Vue.use(Meta);

Vue.use(require('vue-moment'));





Vue.config.productionTip = false






new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

