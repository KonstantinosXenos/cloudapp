import _ from 'lodash';



const namespaced = true

const state = {
    folder_data: [],
    cut_icons: [],
    items_getting_dragged:[]
}
const mutations = {
    items_getting_dragged(state, data) {
        state.items_getting_dragged = data
    },
    cut(state, data) {
        state.cut_icons = data
    },
    update_folder_data(state, data) {

        data.forEach(file => {




            // Find item index using _.findIndex 
            var index = _.findIndex(state.folder_data, { pk: file.pk });
            if (index == -1) {
                state.folder_data.push(file)
            } else {
                // Replace item at index using native splice
                state.folder_data.splice(index, 1, file);
            }
        })



    },
    remove_files(state, data) {

        data.forEach(file => {
            state.folder_data.splice(_.findIndex(state.folder_data, { pk: file.pk }), 1);
        })
    }
}
const actions = {
    add_folder(context) {
        context.commit('taskManager/open_window_add', "lol", { root: true })
    },



}
const getters = {
    get_cut_icons: state => {
        return state.cut_icons
    },
    folder_data: state => {
        return state.folder_data
    },
    items_getting_dragged: state => {
        return state.items_getting_dragged}

}

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
};