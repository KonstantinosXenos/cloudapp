<template>
  <div id="Desktop" class="background">
    <taskbar />
    <div class="WindowContainer" style="height: 100%; width: 100%; position: relative;" ref="WindowContainer">
      <component
        v-for="window in open_windows"
        :parentSize="size"
        :key="window.unique_name"
        :data="window"
        v-bind:is="window.component"
      />
    </div>
  </div>
</template>

<script>
import taskbar from "@/components/desktop/components/taskbar/taskbar.vue";
export default {
  name: "Desktop",
  components: {
    taskbar
  },
  mounted() {
    window.addEventListener("resize", this.resized);
    this.resized() //get initial window container size.
  },
  computed: {
    open_windows() {
      return this.$store.getters["taskManager/open_windows"];
    }
  },
  methods: {

    resized() {
      this.size={ x:this.$refs.WindowContainer.clientWidth,y:this.$refs.WindowContainer.clientHeight}
    
    }
  },
  data: function() {
    return {
      size: { x: 0, y: 0 }
    };
  }
};
</script>

<style scoped>
#Desktop {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.WindowContainer{
  overflow: hidden;
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