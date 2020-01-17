
<template>
  <div id="icon-panel" class="fullheight">
    <drag-select-container
      class="icon-container"
      @mousedown.native.self.stop="unselectAll()"
      @contextmenu.native.self.stop="clickedrightbutton"
      selectorClass="item" 
      @change="dragselect"
    >
        <template>
      <!-- Your items here -->
      <rightclickmenu
        ref="rightclickmenu"
        :menu_options="menu_options_data"
        @optionclicked="optionClicked"
      ></rightclickmenu>

      <h3 v-if="empty_folder">This folder is empty.</h3>
   


      <component
        v-for="item in this.$store.getters.icons"
        v-bind:key="item.pk"
        :item="item"
        ref="icon"
        :is="component_name(item.type)"
        
        class="item"
     
      ></component>
          </template>
  </drag-select-container>
  
  </div>
</template>

<script>
import folderIcon from "./components/icon/folderIcon.vue";
import fileIcon from "./components/icon/fileIcon.vue";
import rightclickmenu from "./components/rightclickmenu.vue";
import DragSelect from './components/DragSelect.vue'
export default {
  name: "iconpanel",
  props: ["folder_data"],
  components: {
    folderIcon,
    fileIcon,
    rightclickmenu,
    'drag-select-container': DragSelect
  },
  computed: {
    empty_folder() {
      return (
        typeof this.$store.getters.icons !== "undefined" &&
        this.$store.getters.icons.length == 0
      );
    }
  },
  methods: {
    component_name(type) {
      if (type == "folder") {
        return "folderIcon";
      } else {
        return "fileIcon";
      }
    },
    dragselect(items) {
      return items
    },
    unselectAll() {
      this.$store.commit("unselect_all_icons");
    },

    // menu functions
    clickedrightbutton(event) {

      this.$refs.rightclickmenu.openMenu(event);
    },
    optionClicked(event) {
      this[event](this.$store.getters.get_selected_icons[0]);
      // this.selectedicons
    },

    //menu option functions for panel
    paste() {
            this.$store.dispatch("paste", {
        folder_array: this.$store.getters.get_cut_icons,
        new_parent: this.$store.getters.current_folder_id
      });
    },
    create_new_folder() {
      this.$store.dispatch("create_folder");
    },

  },

  data: function() {
    return {

      menu_options_data: [
          { name: "New Folder", func: "create_new_folder" },
          { name: "Paste", func: "paste" }
        ],
      selectedItems: []
      
    };
  }
};
</script>

<style scoped>
#icon-panel {
  margin: 0px;
  padding: 0px;
  height: 100%;
  max-height: 100%;
}
.icon-container {
  height: 100%;
  max-height: 100%;
  width: 100%;
  display: flex; /* or inline-flex */

  flex-wrap: wrap;

  align-items: flex-start;
  align-content: flex-start;

  overflow: auto;
}
h3 {
  width: 100%;
  align-content: center;
  user-select: none;
}
</style>




