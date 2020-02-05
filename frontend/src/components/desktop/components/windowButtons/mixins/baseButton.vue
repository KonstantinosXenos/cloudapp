<template>
  <button id="baseButton" :disabled="is_disabled" @click="click_event" @mousedown.prevent.stop>
    <font-awesome-icon :icon="icon" />
    <!-- <font-awesome-icon :icon="['fas', 'fa-level-up-alt']" /> -->
  </button>
</template>


<script>
export default {
  name: "baseButton",
computed: {
is_disabled: function() {
    return  false
}

},

};

</script>

<style scoped>
#baseButton {
  border-radius: 50%;
  height: 20px;
  width: 40px;
  font-size: 16px;
  background-color: transparent;
  text-align: center;
  padding: 0;
  border: none;
  color: white;
}
#baseButton:hover {
  color: rgb(55, 135, 255);
}
</style>