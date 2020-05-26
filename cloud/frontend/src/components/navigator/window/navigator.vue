<template>
<window :data='data'  :parentSize='parentSize'>
<navigator :data='data' class="window-content"/>

</window>
 
</template>

<script>

import window from '@/components/desktop/components/window/window.vue'
import navigator from '@/views/navigator.vue'
export default {
  name: "Navigator",
  props: ['data','parentSize'],
  components: {
    window,
    navigator
  },
  computed: {


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
</style>