import Vue from 'vue'
import App from './App.vue'
import router from './router'


// FA ICONS
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLevelUpAlt, faCloudUploadAlt, faFolderOpen, faFilePdf, faRedo} from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLevelUpAlt, faCloudUploadAlt, faFolderOpen, faFilePdf, faRedo)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// #############################



import Meta from 'vue-meta';
Vue.use(Meta);

Vue.use(require('vue-moment'));
import { debounce } from 'vue-debounce'
Vue.use(debounce)
import vueDebounce from 'vue-debounce'

Vue.use(vueDebounce)


Vue.config.productionTip = false






new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

