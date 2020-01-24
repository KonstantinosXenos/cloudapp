<template>
  <div id="Desktop" class="background" style="height: 100%; width: 100%; position: relative;">
    <taskbar/>
    <window/><window/>
  </div>
</template>

<script>


import taskbar from "@/components/desktop/components/taskbar/taskbar.vue"
import window from "@/components/desktop/components/window/window.vue"
export default {
  name: "Desktop",
  components: {
window,
    taskbar
  },
  data: function() {
    return {

    };
  },

  methods: {
  
  }
};
</script>

<style scoped>

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