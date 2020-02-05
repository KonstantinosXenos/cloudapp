
import taskManagerModules from '@/components/system/taskManagerModules.js'
import navigator_window from '@/components/navigator/window/navigator.vue'
const namespaced = true

const modules = { taskManagerModules }
const state = {
    open_windows: []

}
const mutations = {
    open_window_add(state) {
        var component = navigator_window



        var i = 1
        var names = state.open_windows.map(item => item.unique_name);
        while (names.includes(navigator_window.name + i)) {

            i++;

        }
        state.open_windows.push({ type: component.name, unique_name: component.name + i, component: component })
    },
    close_window(state, data) {

        state.open_windows = state.open_windows.filter(item => item !== data)


    },
    set_focused_window(state, data) {
        state.open_windows.push(state.open_windows.splice(state.open_windows.indexOf(data), 1)[0]);
    }
}
const actions = {

}
const getters = {
    open_windows: state => {
        return state.open_windows
    },
}

export default {
    namespaced,
    modules,
    state,
    mutations,
    actions,
    getters
};