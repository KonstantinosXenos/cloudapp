import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
window.api = axios.create({ baseURL: '', withCredentials: true, xsrfCookieName: "X-CSRFTOKEN" })
window.api.defaults.xsrfCookieName = 'csrftoken'
window.api.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
    // FA ICONS
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLevelUpAlt, faCloudUploadAlt, faFolderOpen, faFilePdf, faRedo, faTimes, faChevronUp, faChevronDown, faUserCircle, faPowerOff, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faComment, faWindowRestore } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLevelUpAlt, faCloudUploadAlt, faFolderOpen, faFilePdf, faRedo, faComment, faTimes, faChevronUp, faChevronDown, faUserCircle, faPowerOff, faExpandArrowsAlt, faWindowRestore)
Vue.component('font-awesome-icon', FontAwesomeIcon)
    // #############################


faPowerOff
import Meta from 'vue-meta';
Vue.use(Meta);

Vue.use(require('vue-moment'));
import { debounce } from 'vue-debounce'
Vue.use(debounce)
import vueDebounce from 'vue-debounce'

Vue.use(vueDebounce)



var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);



Vue.config.productionTip = false



Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function(el) {
        // Focus the element
        el.focus()
    }
})


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')