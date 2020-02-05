<template>
<transition name="slide-fade">
  <vuedraggableresizable
    v-show="!minimized"
    :w="maximized ? this.maximized_width : width"
    :h="maximized ? this.maximized_height : height"
    :x="maximized ? 0 : this.x"
    :y="maximized ? 0 : this.y"
    @dragging="onDrag"
    @resizing="onResize"
    :active="true"
    :parent="true"
    :resizable="!maximized"
    :enable-native-drag="true"
    :prevent-deactivation="true"
    :drag-handle="'.drag-handle'"
    :handles="['tm','mr','bm','ml','tl','br','tr','bl']"
    :min-width="200"
    :min-height="100"
    @mousedown.native.stop='get_focus'
    @click.native.stop
    @dblclick.native.stop
    :z-index="z_index"
  ><div :class="[{'radius':!maximized},'window']">
    <div class="drag-handle" @dblclick="maximize">
      <div class="title vertical-center" v-text="'Navigator'"></div>
      <div class="button-container">
        <minimizeButton class="vertical-center" @minimize="minimize"/>
        <maximizeButton :maximized='maximized' class="vertical-center" @maximize="maximize" />
        <closeButton class="vertical-center" @close_app="close_app" />
      </div>
    </div>
    <div class="window-content">
      <slot class="window-content"></slot>
    </div>
    </div>
  </vuedraggableresizable>
  </transition>
</template>

<script>
import "@/assets/VueDraggableResizable.css";
import closeButton from "@/components/desktop/components/windowButtons/closeButton.vue";
import minimizeButton from "@/components/desktop/components/windowButtons/minimizeButton.vue";
import maximizeButton from "@/components/desktop/components/windowButtons/maximizeButton.vue";
import vuedraggableresizable from "@/components/desktop/components/vue-draggable-resizable.vue";
export default {
  name: "window",
  props: ["data", "parentSize"],

  components: {
    vuedraggableresizable,

    closeButton,
    minimizeButton,
    maximizeButton
  },
  mounted() {},
  computed: {
    z_index() {
      return this.$store.getters["taskManager/open_windows"].indexOf(this.data);
    },
    maximized_height() {
      return this.parentSize.y;
    },
    maximized_width() {
      return this.parentSize.x;
    }
  },
  data: function() {
    return {
      width: 800,
      height: 500,
      x: 110,
      y: 220,
      maximized: false,
      minimized: false,
      window_container: ""
    };
  },

  methods: {
    onResize: function(x, y, width, height) {
      if (!this.maximized) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }
    },
    onDrag: function(x, y) {
      if (!this.maximized) {
        this.x = x;
        this.y = y;
      }
    },
    get_focus() {
      this.$store.commit("taskManager/set_focused_window", this.data);
    },
    close_app() {
      this.$store.commit("taskManager/close_window", this.data);
    },
    maximize() {
      this.maximized = this.maximized ? false : true;
    },
    minimize() {
      this.minimized=true
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
    margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  box-shadow: 2px 2px 5px 4px #0000006e;
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
<style>
.window-content {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  overflow: hidden;
  align-items: stretch;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(130px);
  opacity: 0;
}
</style>