<template>
<div id='taskbar'><powerButton/><expandButton/><div class="appicons"><appIcon/></div><user/></div>
</template>


<script>
import powerButton from './components/buttons/powerButton.vue'
import expandButton from './components/buttons/expandButton.vue'
import appIcon from '@/components/desktop/components/taskbar/components/appIcon/appIcon.vue'
import user from './components/user/user.vue'
export default {
  name: "taskbar",
  components: {powerButton,expandButton,appIcon,user}

};

</script>

<style scoped>
#taskbar {
background: rgb(0,0,0);
background: linear-gradient(131deg, rgba(0,0,0,0.7038165608040091) 0%, rgba(0,0,0,1) 48%, rgba(0, 0, 0, 0.719) 100%);
height: 40px;
width: 100%;
display: flex;
flex-direction:row;
padding-right:200px;

}

.appicons {
flex-grow:1;
margin-left:auto;
display: flex;
flex-direction:row;
align-items:flex-end;
padding:5px;
padding-left: 15px;

}
</style>