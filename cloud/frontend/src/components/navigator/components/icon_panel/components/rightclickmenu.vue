
<template>
  <ul
    id="right-click-menu"
    tabindex="-1"
    ref="right"
    v-if="viewMenu"
    @blur="closeMenu"
    @mouseup.stop.prevent
    :style="{top:top, left:left}"

  >
    <li
      v-for="(option,index) in menu_options"
      :key="index"
      v-text="option.name"
      
      @mousedown.stop
      @click.stop="optionclicked(option.func)"
     
    ></li>
  </ul>
</template>
<script>
export default {
  props: ["menu_options"],
  data: function() {
    return {
      viewMenu: false,
      top: "0px",
      left: "0px"
    };
  },

  methods: {
    setMenu: function(top, left) {
      var largestHeight =
        window.innerHeight - this.$refs.right.offsetHeight - 25;
      var largestWidth = window.innerWidth - this.$refs.right.offsetWidth - 25;

      if (top > largestHeight) top = largestHeight;

      if (left > largestWidth) left = largestWidth;

      this.top = top + "px";
      this.left = left + "px";
    },

    closeMenu: function() {
      this.viewMenu = false;
    },

    openMenu: function(e) {
      this.viewMenu = true;
      this.$nextTick(
        function() {
          this.$refs.right.focus();

          this.setMenu(e.y, e.x);
        }.bind(this)
      );
      e.preventDefault();
    },
    optionclicked(option) {
      this.$emit("optionclicked", option);
      this.closeMenu();
    }
  }
};
</script>




<style scoped>
body {
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 3em;
}

.center {
  text-align: center;
}

#demo {
  width: 100%;
  height: 100%;
}

#right-click-menu {
  background: #fafafa;
  border: 1px solid #bdbdbd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 250px;
  z-index: 999999;
}

#right-click-menu li {
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
  padding: 5px 35px;
  user-select: none;
}

#right-click-menu li:last-child {
  border-bottom: none;
}

#right-click-menu li:hover {
  background: #1e88e5;
  color: #fafafa;
}
</style>