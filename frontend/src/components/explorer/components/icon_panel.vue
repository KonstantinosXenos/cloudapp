
<template>
  <div id="icon-panel" class="fullheight">
    <div
      class="icon-container"
      @mousedown.self.stop="unselectAll()"
      @contextmenu.stop="clickedrightbutton($event, 'panel')"
    >
      <rightclickmenu
        ref="rightclickmenu"
        :menu_options="menu_options_data"
        @optionclicked="optionClicked($event)"
      ></rightclickmenu>

      <h3 v-if="this.$store.getters.icons.length==0">This folder is empty.</h3>
      <icon
        v-for="item in this.$store.getters.icons"
        v-bind:key="item.pk"
        :item="item"
        ref="icon"
        @dblclick.native.stop="double_clicked_icon(item.pk)"
        @contextmenu.native.stop="clickedrightbutton($event,item)"
        @mousedown.native.stop="iconSelected(item)"
      ></icon>
    </div>
  </div>
</template>

<script>
import icon from "./icon.vue";
import rightclickmenu from "./rightclickmenu.vue";
export default {
  name: "iconpanel",
  props: ["folder_data"],
  components: {
    icon,
    rightclickmenu
  },
  computed: {},
  methods: {
    iconSelected(item) {
      this.$store.commit("select_icons",[item]);
    },
    unselectAll() {
      this.$store.commit('unselect_all_icons')
    },


    // menu functions
    clickedrightbutton(event, component) {
      if (component == "panel") {
        this.menu_options_data = [
          { name: "New Folder", func: "create_new_folder" }
        ];
      } else {
        this.menu_options_data =  [
          { name: "Rename", func: "rename" }
        ];
      }
      this.$refs.rightclickmenu.openMenu(event);
    },
    optionClicked(event) {
      
      this[event](this.selectedicons);
      // this.selectedicons
    },
    double_clicked_icon(pk) {
    this.$router.push({ name: 'explorer', params: { id: pk } })
    },
    //menu option functions for panel
    create_new_folder() {
      this.$store.dispatch("create_folder");
    },
    rename(item) {
        console.log('renaming');
        this.$store.commit("start_renaming",item);
    }
  },

  data: function() {
    return {
      selectedicons: [],
      menu_options_data: ["Delete", "Copy"],
      renaming : null
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




