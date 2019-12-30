import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
// import router from './router'
window.api = axios.create({ baseURL: '', withCredentials: true, xsrfCookieName: "X-CSRFTOKEN" })
window.api.defaults.xsrfCookieName = 'csrftoken'
window.api.defaults.xsrfHeaderName = 'X-CSRFTOKEN'



function redirect_to_login_page() {
  window.location.href = '/authentication/login/';

}
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    folder_data: {},
    path: [],
    selected_icons: [],
    renaming: null,
    parent_folder: null
  },
  mutations: {
    update_folder_data(state, data) {
      state.folder_data = data
      state.path = data.path.folders
      state.parent_folder = data.parent
   
    },
    add_created_folder(state, data) {

      state.folder_data.contents.push(data)

    },
    start_renaming(state, data) {

      state.renaming = data

    },
    select_icons(state, data) {

      state.selected_icons = data

    },
    unselect_all_icons(state) {

      state.selected_icons = []

    },
  },
  actions: {
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
    go_up() {
      console.log('going up')
      router.push({ name: 'explorer', params: { id: 1 } })

    },
    create_folder(context) {

      window.api.post('/api/folders/', {

        "title": "New Folder",
        "parent": this.getters.current_folder_id
      }).then(response => (context.commit('add_created_folder', response.data)))
        .catch(function (error) {
          console.log(error)
        });
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
  }
})
