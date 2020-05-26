
<template>
  <div id="icon-panel" class="fullheight">
    
    <drag-select-container
      class="icon-container"
      @mousedown.native.self="unselectAll()"
      @contextmenu.native.self="clickedrightbutton"
      @dragover.native="drag_over"
      selectorClass="item"
      @change="dragselect"
      @drop.native="dropped"
      :store="store"
    >
      <template>
        <!-- Your items here -->
        <rightclickmenu
          ref="rightclickmenu"
          :menu_options="menu_options_data"
          :store="store"
          @optionclicked="optionClicked"
        ></rightclickmenu>

        <h3 v-if="empty_folder">This folder is empty.</h3>

        <component
          v-for="item in items"
          v-bind:key="item.pk"
          :item="item"
          ref="icon"
          :is="component_name(item.type)"
          class="item"
          :store="store"
        ></component>
      </template>
    </drag-select-container>
  </div>
</template>

<script>
import folderIcon from "./components/icon/folderIcon.vue";
import fileIcon from "./components/icon/fileIcon.vue";
import rightclickmenu from "./components/rightclickmenu.vue";
import DragSelect from "./components/DragSelect.vue";
export default {
  name: "iconpanel",
  props: ["store"],
  components: {
    folderIcon,
    fileIcon,
    rightclickmenu,
    "drag-select-container": DragSelect
  },
  computed: {
    items() {
      var files = this.$store.getters[
        "taskManager/taskManagerModules/navigator/folder_data"
      ];

      if (!files | !this.folder_pk) return [];
      var thisFolderContents = files.filter(
        item => item.parent == this.folder_pk
      );
      return thisFolderContents;
    },
    folder_pk() {
      return this.$store.getters[this.store + "current_folder_id"];
    },
    empty_folder() {
      return typeof this.items !== "undefined" && this.items.length == 0;
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
      return items;
    },
    unselectAll() {
      this.$store.commit(this.store + "unselect_all_icons");
    },

    // menu functions
    clickedrightbutton(event) {
      this.$refs.rightclickmenu.openMenu(event);
    },
    optionClicked(event) {
      this[event](this.$store.getters[this.store + "get_selected_icons"][0]);
      // this.selectedicons
    },

    //menu option functions for panel
    paste() {
      this.$store.dispatch(this.store + "move_files", {
        pk_array: this.$store.getters[
          "taskManager/taskManagerModules/navigator/get_cut_icons"
        ],
        new_parent: this.$store.getters[this.store + "current_folder_id"]
      });
      this.$store.commit("taskManager/taskManagerModules/navigator/cut", []);
    },
    create_new_folder() {
      this.$store.dispatch(this.store + "create_folder");
    },
    drag_over(e) {
      
      
      console.log(e.dataTransfer.files[0]);
      if (
        this.$store.getters[
          "taskManager/taskManagerModules/navigator/items_getting_dragged"
        ] || e.dataTransfer.files.length
      ) {
                e.preventDefault();
      }
    },
    dropped(e) {
      
      e.preventDefault();
      var itemArray = this.$store.getters[
        "taskManager/taskManagerModules/navigator/items_getting_dragged"
      ];
      this.$store.dispatch(this.store + "move_files", {
        pk_array: itemArray,
        new_parent: this.folder_pk
      });
    }
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
.icon-container {
  display: flex; /* or inline-flex */
  height: 100%;
  flex-wrap: wrap;
  overflow: auto;
  align-items: flex-start;
  align-content: flex-start;
}
h3 {
  width: 100%;
  align-content: center;
  user-select: none;
}
</style>




