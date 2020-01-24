<template>
<div id='taskbar'><powerButton/><expandButton/></div>
</template>


<script>
import powerButton from './components/buttons/powerButton.vue'
import expandButton from './components/buttons/expandButton.vue'
export default {
  name: "taskbar",
  components: {powerButton,expandButton}

};

</script>

<style scoped>
#taskbar {
background: rgb(0,0,0);
background: linear-gradient(131deg, rgba(0,0,0,0.7038165608040091) 0%, rgba(0,0,0,1) 48%, rgba(0, 0, 0, 0.719) 100%);
height: 40px;
width: 100%;
display: flex;
}
</style>