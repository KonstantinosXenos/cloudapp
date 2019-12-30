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
      <font-awesome-icon :icon="icon" size="5x" />

      <div class="icon-title" v-text="item.title"></div>
    </div>
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
    }
  },
  methods: {
    iconSelected() {
      this.$store.commit("select_icons", [this.item]);
    }
  },
  data: function() {
    return {
      hover: false
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
</style>