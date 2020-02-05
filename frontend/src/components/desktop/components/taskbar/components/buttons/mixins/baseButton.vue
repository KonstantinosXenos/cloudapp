<template>
  <button id="baseButton" :disabled="is_disabled" @click="click_event">
    <font-awesome-icon :icon="icon" :style="{ color: 'white'  }" size="2x"/>
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
  margin-left: 10px;
  border-radius: 50%;
  height:'100%';
  font-size: 14px;
  background-color: transparent;
  text-align: center;
  padding: 0;
  border: none;
}
</style>