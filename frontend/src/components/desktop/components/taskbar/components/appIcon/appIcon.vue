<template><div @click="add" :class="{icon, iconwithopenwindows:open_windows.length>0}" style="margin:0;padding:0;">
  
    <font-awesome-icon 
    
    :icon="icon" :style="{ color: color  }" size="2x"/>
    <div v-show="open_windows.length>1" class="counter">{{open_windows.length}}</div>
    </div>
</template>

<script>

export default {
 name: 'appIcon',
 
 data: function () {

     return {
    icon: ['fa','folder-open'],
    type: 'navigator-window',
    color: "rgb(255, 199, 8)"
    }

 },
 computed: {
open_windows() {
  var open=this.$store.getters["taskManager/open_windows"].filter(window => window.type == this.type)
  return open
}

 },
 methods: {

         add() {
      this.$store.dispatch(
        "taskManager/taskManagerModules/navigator/add_folder"
      );
    },
 }

}
</script>

<style scoped>
.icon {
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border: solid 1.5px transparent ;
  width: 50px;
  height: 100%;
  overflow: hidden;
}
.iconwithopenwindows {
border: solid 1.5px white;
border-radius: 10px;
}
.counter {
  background: white;
  font-weight: bold;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 20px;
  border-top-left-radius: 5px;
}
</style>
