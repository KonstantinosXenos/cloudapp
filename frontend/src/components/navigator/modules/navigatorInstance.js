import router from '@/router'




function error_handling(error) {
    

    if (error.response) {

        switch(error.response.status) {
            case 403:
                window.location.href = '/login/'
              break;

            default:
              console.log(error)
          }
    }
}



const namespaced = true


const state = () => {
    return {
        folder_data: {},
        path: [],
        selected_icons: [],
        renaming: null,
        parent_folder: null,
        loading: false

    }
}
const mutations = {

    update_folder_data(state, data) {
        state.folder_data = data
        state.path = data.path.folders
        state.parent_folder = data.parent

    },
    set_loading(state, data) {
        state.loading = data


    },

    add_created_file(state, data) {

        state.folder_data.contents.push(data)
        state.renaming = data
    },
    start_renaming(state, data) {

        state.renaming = data

    },

    select_icons(state, data) {
        console.log('selected icons mutations triggered with', data)
        state.selected_icons = data
        state.renaming = null

    },
    unselect_all_icons(state) {
        console.log('unselect all')
        state.selected_icons = []
        state.selected_icons
        state.renaming = null
    },
}

const actions = {
    add_files(context, data) {


        var folder_data = context.getters.folder_data
        var pk_only_from_folder = folder_data.contents.map(it => it.pk)
        var filtered = data.filter(e => !pk_only_from_folder.includes(e.pk))
        filtered.forEach(item => folder_data.contents.push(item))
        context.commit('update_folder_data', folder_data)
    },

    cut(context) {

        context.commit('taskManager/taskManagerModules/navigator/cut', context.getters.get_selected_icons, { root: true })

    },
    paste(context) {
        let array_of_folders = context.getters.get_cut_icons.map(folder => { return { pk: folder.pk, parent: context.getters.current_folder_id } });

        window.api.patch("/api/item/move/", array_of_folders).then(response => context.dispatch('add_files', response.data),
                context.commit('taskManager/taskManagerModules/navigator/cut', [], { root: true }))
            .catch(function(error) {
                // on error revert the change
                console.log(error)
            });
    },
    delete_selected_items(context) {
        let array_of_items = context.state.selected_icons.map(item => { return { pk: item } });

        window.api.delete("/api/item/", { data: array_of_items }).then(response => context.commit('taskManager/taskManagerModules/navigator/remove_files', response.data, { root: true }))
            .catch(function(error) {
                // on error revert the change
                console.log(error)
            });

    },

    move_files(context, data) {
        let array_of_file_pk = data.pk_array.map(pk => { return { pk: pk, parent: data.new_parent } });

        window.api.patch("/api/item/move/", array_of_file_pk).then(response => context.commit('taskManager/taskManagerModules/navigator/update_folder_data', response.data, { root: true }))
            .catch(function(error) {
                // on error revert the change
                console.log(error)
            });

    },


    update_folder_data(context, folder_id) {

        window.api
            .get("/api/folders/" + folder_id + "/")
            .then(response => {
                context.commit('taskManager/taskManagerModules/navigator/update_folder_data', response.data.contents, { root: true });
                context.commit('update_folder_data', response.data)
            })
            .catch(error => error_handling(error));

    },
    complete_renaming(context, data) {
        // temporary change the title to new title until request completes to make transition seamless
        var old_title = data.item.title
        data.item.title = data.title
        window.api.patch(data.item.url, { "title": data.title }).then(response => data.item.title = response.data.title)
            .catch(function(error) {
                // on error revert the change
                data.item.title = old_title
                console.log(error)
            });

    },
    go_up() {
        console.log('going up')
        router.push({ name: 'explorer', params: { id: 1 } })

    },
    create_folder(context) {

        // Increment folder name if it already exists
        var default_name = 'New Folder'
        var i = ''
        var titles_in_folder = context.rootGetters['taskManager/taskManagerModules/navigator/folder_data'].filter(file => file.parent == context.getters.current_folder_id).map(it => it.title);
        while (titles_in_folder.includes(default_name + i)) {
            if (i == '') {
                i = 2
            } else {
                i++;
            }
        }
        ///////////////


        window.api.post('/api/folders/', {

                "title": default_name + i,
                "parent": context.getters.current_folder_id
            }).then(response => (
                context.commit('taskManager/taskManagerModules/navigator/update_folder_data', [response.data], { root: true }),
                context.commit('start_renaming', response.data)
                ))
            .catch(function(error) {
                console.log(error)
            });
    }


}
const getters = {
    icons: state => {
        return state.folder_data.contents
    },
    current_folder_id: state => {
        return state.folder_data.pk
    },
    folder_path: state => {
        return state.path
    },
    parent_folder: state => {
        return state.parent_folder
    },
    get_selected_icons: state => {
        return state.selected_icons
    },

    is_getting_renamed: state => {
        return state.renaming
    },
    folder_data: state => {
        return state.folder_data
    },

}


export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
};