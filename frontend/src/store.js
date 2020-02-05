import Vue from 'vue'
import Vuex from 'vuex'
// import router from './router'

Vue.use(Vuex)

import taskManager from '@/components/system/taskManager.js'
export default new Vuex.Store({
    namespaced : true,
    modules: { taskManager },
    state: {
    },
    mutations: {

    },
    actions: {},
    getters: {}
})