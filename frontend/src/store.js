import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
// import router from './router'
window.api = axios.create({ baseURL: '', withCredentials: true, xsrfCookieName: "X-CSRFTOKEN" })
window.api.defaults.xsrfCookieName = 'csrftoken'
window.api.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
Vue.use(Vuex)

function remove_files(context, data) {
  let result = data.map(it => it.pk);
  var folder_data = context.getters.folder_data
  var filteredArray = folder_data.contents.filter(e => !result.includes(e.pk))
  folder_data.contents = filteredArray
  console.log(folder_data)
  context.commit('update_folder_data', folder_data)

}

function redirect_to_login_page() {
  window.location.href = '/authentication/login/';

}

export default new Vuex.Store({
  state: {
    folder_data: {},
    path: [],
    selected_icons: [],
    renaming: null,
    parent_folder: null,
    cut_icons: []
  },
  mutations: {
    cut(state, data) {
      state.cut_icons = data
    },
    update_folder_data(state, data) {
      state.folder_data = data
      state.path = data.path.folders
      state.parent_folder = data.parent

    },

    add_created_file(state, data) {

      state.folder_data.contents.push(data)
      state.renaming = data
    },
    start_renaming(state, data) {

      state.renaming = data

    },

    select_icons(state, data) {

      state.selected_icons = data
      state.renaming = null

    },
    unselect_all_icons(state) {

      state.selected_icons = []
      state.selected_icons
      state.renaming = null
    },
  },
  actions: {
    add_files(context, data) {


      var folder_data = context.getters.folder_data
      var pk_only_from_folder = folder_data.contents.map(it => it.pk)
      var filtered = data.filter(e => !pk_only_from_folder.includes(e.pk))
      filtered.forEach(item => folder_data.contents.push(item))
      context.commit('update_folder_data', folder_data)
    },

    cut(context) {
      context.commit('cut', context.getters.get_selected_icons)
    },
    paste(context) {
      let array_of_folders = context.getters.get_cut_icons.map(folder => { return { pk: folder.pk, parent: context.getters.current_folder_id } });

      window.api.patch("/api/item/move/", array_of_folders).then(response => context.dispatch('add_files', response.data),
        context.commit('cut', []))
        .catch(function (error) {
          // on error revert the change
          console.log(error)
        });
    },
    delete_selected_items(context) {
      let array_of_items = context.state.selected_icons.map(item => { return { pk: item.pk } });
      console.log(array_of_items)
      window.api.delete("/api/item/", { data: array_of_items }).then(response => remove_files(context, response.data))
        .catch(function (error) {
          // on error revert the change
          console.log(error)
        });

    },

    move_files(context, data) {
      let array_of_folders = data.folder_array.map(folder => { return { pk: folder.pk, parent: data.new_parent } });

      window.api.patch("/api/item/move/", array_of_folders).then(response => remove_files(context, response.data))
        .catch(function (error) {
          // on error revert the change
          console.log(error)
        });

    },


    update_folder_data(context, folder_id) {

      window.api
        .get("/api/folders/" + folder_id + "/")
        .then(response => (context.commit('update_folder_data', response.data)))
        .catch(function (error) {
          redirect_to_login_page()
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });

    },
    complete_renaming(context, data) {
      // temporary change the title to new title until request completes to make transition seamless
      var old_title = data.item.title
      data.item.title = data.title
      window.api.patch(data.item.url, { "title": data.title }).then(response => data.item.title = response.data.title)
        .catch(function (error) {
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
      var titles_in_folder = context.getters.folder_data.contents.map(it => it.title);
      while (titles_in_folder.includes(default_name + i)) {
        if (i == '') {
          i = 2
        }
        else {
          i++;
        }
      }
      ///////////////


      window.api.post('/api/folders/', {

        "title": default_name + i,
        "parent": this.getters.current_folder_id
      }).then(response => (context.commit('add_created_file', response.data)))
        .catch(function (error) {
          console.log(error)
        });
    },
    modify_folder_data() {
      console.log(this.state.folder_data)

    },

  },
  getters: {
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
    get_cut_icons: state => {
      return state.cut_icons
    },
    is_getting_renamed: state => {
      return state.renaming
    },
    folder_data: state => {
      return state.folder_data
    },

  }
})
