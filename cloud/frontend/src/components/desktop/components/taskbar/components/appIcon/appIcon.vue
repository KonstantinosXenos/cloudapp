<template><div @mouseover="mouseover" @mouseout="trigger">
  <div @click="add"  :class="[{ iconwithopenwindows:open_windows.length>0 },'icon']" style="margin:0;padding:0;">
  
    <font-awesome-icon 
    
    :icon="icon" :style="{ color: color  }" size="2x"/>
    <div v-show="open_windows.length>1" class="counter">{{open_windows.length}}</div>
    
    </div><div v-if="hovered && open_windows.length>0"  class="hovermenu" style="position:absolute;"><windowentry  @entryclick="closeentrymenu" v-for="window in open_windows" :window="window" :key="window.unique_name"></windowentry></div></div>
</template>

<script>

import windowentry from "@/components/desktop/components/taskbar/components/appIcon/components/windowentry.vue"
export default {
 name: 'appIcon',
 components: {windowentry},
 data: function () {

     return {
    icon: ['fa','folder-open'],
    type: 'Navigator',
    color: "rgb(255, 199, 8)",
    hovered: "false"
    
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
        trigger() {
        this.timer = setTimeout(()=>{ this.hovered = false; }, 200);
    },
    mouseover(){
      clearTimeout(this.timer)
      this.hovered=true
    },
    closeentrymenu() {
      this.hovered = false

    }
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
  width: 60px;
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
.hovermenu{
  color: white;
  border: solid 2px black;
  background:black;
  z-index: 100;
  padding: 10px;
  border-radius: 10px;

}

    

</style>
