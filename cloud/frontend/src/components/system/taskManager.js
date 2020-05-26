import _ from 'lodash';
import taskManagerModules from '@/components/system/taskManagerModules.js'
import navigator from '@/components/navigator/window/navigator.vue'
const namespaced = true

const modules = { taskManagerModules }
const state = {
    open_windows: [],   // All the open windows, including the minimized.
    minimized_windows: []

}
const mutations = {
    open_window_add(state) {
        var component = navigator


        var i = 1
        var names = state.open_windows.map(item => item.unique_name);
        while (names.includes(component.name + i)) {

            i++;

        }
        state.open_windows.push({ type: component.name, unique_name: component.name + i, component: component, title: component.name, taskbarname: component.name })
    },
    change_title(state,data) {
        var item = state.open_windows.find(x => x.unique_name == data.unique_name);
        if (item) {
            item.title = data.new_title;
        }
    },
    change_taskbarname(state,data) {
        var item = state.open_windows.find(x => x.unique_name == data.unique_name);
        if (item) {
            item.taskbarname = data.new_taskbarname;
        }
    },
    add_minimized(state, unique_name) {

        state.minimized_windows.push(unique_name)
    },
    remove_minimized(state, unique_name) {
        state.minimized_windows = _.remove(state.minimized_windows, unique_name)
    },
    close_window(state, data) {

        state.open_windows = state.open_windows.filter(window => window.unique_name !== data.unique_name)
        state.minimized_windows = _.remove(state.minimized_windows, data.unique_name)

    },
    set_focused_window(state, data) {
        if (state.open_windows.includes(data)) {
            state.open_windows.push(state.open_windows.splice(state.open_windows.indexOf(data), 1)[0]);
        }
    }
}
const actions = {

}
const getters = {
    open_windows: state => {
        return state.open_windows
    },
    minimized_windows: state => {
        return state.minimized_windows
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