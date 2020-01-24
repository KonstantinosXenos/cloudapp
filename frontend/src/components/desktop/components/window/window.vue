<template>

    <vue-draggable-resizable
      class="window radius"
      :w="900"
      :h="500"
      @dragging="onDrag"
      @resizing="onResize"
      :active="true"
      :parent="true"
      :enable-native-drag="true"
      :prevent-deactivation="true"
      :drag-handle="'.drag-handle'"
      :handles="['tl','tm','tr','mr','br','bm','bl','ml']"
      :min-width="200"
      :min-height="100"
    >
      <div class="drag-handle">
        <div class="title vertical-center" v-text="'Navigator'"></div>
        <div class="button-container">
          <minimizeButton class="vertical-center" />
          <maximizeButton class="vertical-center" />
          <closeButton class="vertical-center" />
        </div>
      </div>
      <div class="content">
        <navigator class="content" />
      </div>
    </vue-draggable-resizable>

</template>

<script>

import "@/assets/VueDraggableResizable.css";
import closeButton from "@/components/desktop/components/windowButtons/closeButton.vue";
import minimizeButton from "@/components/desktop/components/windowButtons/minimizeButton.vue";
import maximizeButton from "@/components/desktop/components/windowButtons/maximizeButton.vue";
import navigator from "@/views/navigator.vue";
export default {
  name: "window",
  components: {
    'vue-draggable-resizable': () => import( /* webpackChunkName: "resize" */ 'vue-draggable-resizable'),
 
    closeButton,
    minimizeButton,
    maximizeButton,
    navigator
  },
  data: function() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
  },

  methods: {
    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    }
  }
};
</script>

<style scoped>
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.radius {
  border-radius: 15px;
  border-spacing: 0;
}
.window {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  box-shadow: 2px 2px 5px 4px #0000006e;
}
.content {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  overflow: auto;
  align-items: stretch;
}
.drag-handle {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 30px;
  min-height: 30px;
  max-height: 30px;
  color: azure;
  background-color: rgb(49, 49, 49);
  user-select: none;
}
.button-container {
  position: relative;
  margin-left: auto;
  padding-right: 10px;
}
.vertical-center {
  margin: 0;
  position: relative;
  top: 50%;

  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.title {
  line-height: 30px;
  margin-left: 10px;
}
.background {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    204deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(22, 24, 64, 1) 23%,
    rgba(1, 151, 181, 1) 100%
  );
}
</style>