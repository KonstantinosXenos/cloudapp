<template>
  <div
    @mousedown.stop="iconSelected()"
    @dblclick.stop="double_clicked_icon()"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="icon absolute-center"
    :class="[{hovered: hover},is_selected]"
  >
    <div class="icon-image absolute-center">
      <div class="mimetype">{{item.type}}</div>
      <font-awesome-icon :icon="icon" size="5x" />
    </div>
    <input v-if="is_getting_renamed" class="icon-title" @mousedown.stop ref="input" v-model="title" />
    <div v-else class="icon-title" v-text="item.title"></div>
    <div class="modified">Modified:{{item.modification_date | moment("YYYY-MM-DD") }}</div>
  </div>
</template>

<script>
export default {
  name: "icon",
  props: ["item"],
  computed: {
    is_selected: function() {
      if (this.$store.getters.get_selected_icons.includes(this.item)) {
        return "selected";
      } else {
        return "";
      }
    },
    is_getting_renamed: function() {
      if (this.$store.getters.is_getting_renamed == this.item) {
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
  
  if (oldis_getting_renamed==true) {


  this.$store.dispatch("complete_renaming", {item:this.item, title:this.title});
    }}
  },
  methods: {
    iconSelected() {
      this.$store.commit("select_icons", [this.item]);
    }
  },
  data: function() {
    return {
      hover: false,
      title: this.item.title
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
  padding: 20px;
  margin: 10px;
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
  z-index: 10;
  padding: 2px;
  min-width: 30px;
  border-radius: 5px;
}
</style>