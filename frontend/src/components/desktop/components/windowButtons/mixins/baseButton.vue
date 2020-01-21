<template>
  <button id="baseButton" :disabled="is_disabled" @click="click_event">
    <font-awesome-icon :icon="icon" :style="{ color: 'white' }" />
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
methods: {
click_event() {

}

}
};

</script>

<style scoped>
#baseButton {
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-size: 14px;
  background-color: transparent;
  text-align: center;
  padding: 0;
  border: none;
}
</style>