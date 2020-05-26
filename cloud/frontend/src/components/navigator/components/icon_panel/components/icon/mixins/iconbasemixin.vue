<template>
  <div
    @dragstart="drag_it"
    @dragover.stop="drag_over"
    @dragend="drag_end"
    @drop.stop="dropped"
    :draggable="!is_getting_renamed"
    @dblclick="double_clicked_icon"
    @mousedown="iconSelected"
    @mouseup="mouse_up"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @contextmenu="clickedrightbutton"
    class="icon absolute-center"
    :class="[{hovered: hover},is_selected]"
  >
    <div class="icon-image absolute-center" :class="[is_cut]">
      <div class="mimetype">{{item.type}}</div>

      <div v-if="number_of_comments>0 || hover || is_selected" class="chaticon">
        <font-awesome-icon :icon="['far','comment']"  size="lg" />
      </div>
      <div v-if="number_of_comments" class="numberofcomments">{{number_of_comments}}</div>

      <font-awesome-icon :icon="icon" :style="{ color: color }" size="5x" />
    </div>
    <input
      v-if="is_getting_renamed"
      class="icon-title"
      ref="input"
      v-model="title"
      v-on:submit.prevent="stop_renaming"
      @drag.prevent.stop
      @dragstart.prevent.stop
      draggable="false"
    />
    <div v-else class="icon-title" v-text="item.title"></div>
    <div class="modified">Modified:{{item.modification_date | moment("YYYY-MM-DD") }}</div>
    <rightclickmenu
      ref="rightclickmenu"
      :menu_options="menu_options_data"
      @optionclicked="optionClicked"
      :store="store"
    ></rightclickmenu>
  </div>
</template>

<script>
import rightclickmenu from "@/components/navigator/components/icon_panel/components/rightclickmenu.vue";
export default {
  name: "icon",
  components: {
    rightclickmenu
  },
  props: ["item", "store"],
  computed: {
    number_of_comments: function() {
      // return 1;
      return this.item.comment.length;
    },
    is_selected: function() {
      if (
        this.$store.getters[this.store + "get_selected_icons"].includes(
          this.item.pk
        )
      ) {
        return "selected";
      } else {
        return "";
      }
    },
    is_cut: function() {
      if (
        this.$store.getters[
          "taskManager/taskManagerModules/navigator/get_cut_icons"
        ].includes(this.item.pk)
      ) {
        return "cut";
      } else {
        return "";
      }
    },
    is_getting_renamed: function() {
      if (this.$store.getters[this.store + "is_getting_renamed"] == this.item) {
        this.$nextTick(function() {
          this.$refs.input.select();
        });
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    is_getting_renamed: function(newis_getting_renamed, oldis_getting_renamed) {
      if (oldis_getting_renamed == true) {
        this.$store.dispatch(this.store + "complete_renaming", {
          item: this.item,
          title: this.title
        });
      }
    }
  },
  methods: {
    cut() {
      this.$store.dispatch(this.store + "cut");
    },
    stop_renaming() {
      this.$store.commit(this.store + "start_renaming", null);
    },
    iconSelected(event) {
      console.log("Clicked on", this.item.pk);
      var selected = this.$store.getters[this.store + "get_selected_icons"];
      if (event.which === 3 && selected.includes(this.item.pk)) {
        // if right click and clicked item is already selected send it first in selection array
        var combined = [];
        [this.item.pk].concat(selected).forEach(pk => {
          if (combined.indexOf(pk) == -1) combined.push(pk);
        });
        this.$store.commit(this.store + "select_icons", combined);
      } else {
        if (selected.length > 1 && selected.includes(this.item.pk)) {
          // block left click to allow multiple items to be dragged
        } else {
          this.$store.commit(this.store + "select_icons", [this.item.pk]);
          console.log("Selected icon with pk ", this.item.pk);
        }
      }
    },
    mouse_up() {
      if (
        event.which === 1 &&
        this.$store.getters[this.store + "get_selected_icons"].length > 1 &&
        this.$store.getters[this.store + "get_selected_icons"].includes(
          this.item.pk
        )
      ) {
        console.log("Mouse up selection after multiselect", this.item.pk);
        this.$store.commit(this.store + "select_icons", [this.item.pk]);
      }
    },
    drag_it(event) {
      this.$store.commit(
          "taskManager/taskManagerModules/navigator/items_getting_dragged", this.$store.getters[this.store + "get_selected_icons"]
      )
      event.dataTransfer.setData(
        "itemArray",
        JSON.stringify(this.$store.getters[this.store + "get_selected_icons"]
        )
      );
      event.dataTransfer.effectAllowed = "move";
    },
    drag_over() {

      if (
        this.item.type == "folder" && !this.$store.getters["taskManager/taskManagerModules/navigator/items_getting_dragged"].includes(this.item.pk)
      ) {
        
        event.preventDefault();
      }
    },
    drag_end() {
      document.documentElement.style.cursor = "default";
    },
    dropped() {
      var itemArray = this.$store.getters["taskManager/taskManagerModules/navigator/items_getting_dragged"]
      console.log('dropped files to ', this.item.pk)
      this.$store.dispatch(this.store + "move_files", {
        pk_array: itemArray,
        new_parent: this.item.pk
      });
    },
    clickedrightbutton(event) {
      this.$refs.rightclickmenu.openMenu(event);
    },

    optionClicked(event) {
      this[event]();
    },
    rename() {
      this.$store.commit(this.store + "start_renaming", this.item);
    },
    delete() {
      this.$store.dispatch(this.store + "delete_selected_items");
    }
  },
  data: function() {
    return {
      hover: false,
      title: this.item.title,
      menu_options_data: [
        { name: "Rename", func: "rename" },
        { name: "Cut", func: "cut" },
        { name: "Delete", func: "delete" }
      ]
    };
  }
};
</script>

<style scoped>
.hovered {
  background-color: aliceblue;
}

.selected {
  background-color: rgb(139, 185, 255);
  border-style: solid;
}

.absolute-center {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;

  align-items: center;
  flex-direction: column;
}

.icon {
  padding: 5px;
  margin: 5px;
  border-style: hidden;
  user-select: none;
  width: 100px;
}
.icon-image {
  width: 100%;
  position: relative;
}
.icon-title {
  width: 100%;
  text-align: center;
  font-size: 15px;
  border: 0;
  padding: 1px;
  margin: 3px;
  word-wrap: break-word;
}

.modified {
  font-size: 10px;
  font-style: italic;
}

.mimetype {
  background: brown;
  color: white;
  font-size: 8px;
  position: absolute;
  top: 17%;
  left: 0%;
  padding: 2px;
  min-width: 30px;
  border-radius: 5px;
}
.chaticon {
  position: absolute;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;

  top: 10%;
  left: 80%;
  padding: 0px;
  min-width: 30px;
  border-radius: 5px;
}
.numberofcomments {
  position: absolute;
  border-width: 1.5px;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  background: red;
  font-size: 11px;
  color: white;
  top: 20%;
  left: 93%;

  padding: 0px;
  margin: 0px;
  width: 16px;
  height: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 16px;
}
#icon:hover {
  cursor: -webkit-grab;
}

#icon:active {
  cursor: -webkit-grabbing;
}

#Dropzone {
  float: left;
  width: 300px;
  height: 100px;
  border: 1px solid;
  margin-bottom: 50px;
}
.cut {
  opacity: 0.5;
}
</style>