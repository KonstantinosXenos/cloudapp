<template>
  <div id="navigator" class="flex-container flex-column" style="align-items: stretch;">
    <toolbar :store='store' class="flex-row"></toolbar>
    <div class="flex-container flex-row middle-container">
      <iconpanel
        style="width: 50%;"
        @selecteditems="selecteditems"
        ref="icon_panel"
        :store='store'
      ></iconpanel>
      <preview :store='store' style="margin-left: auto;width: 50%;"></preview>
    </div>
    <div class="footer flex-row"></div>
  </div>
</template>
<script>

import toolbar from "@/components/navigator/components/toolbar/toolbar.vue";
import preview from "@/components/navigator/components/preview";
import iconpanel from "@/components/navigator/components/icon_panel/icon_panel.vue";
import navigatorInstance from '@/components/navigator/modules/navigatorInstance.js'
export default {
  name: "navigator",
  props: ['data'],
  components: {
    toolbar,
    preview,
    iconpanel
  },
    computed: {title() {
      
      return this.$store.getters[this.store+'title']
    }
    },
    watch: {
    $route(to) {
      
      this.$store.dispatch('update_folder_data',to.params.id)

    },
    title(newValue){
      
      this.$store.commit('taskManager/change_title',{unique_name:this.data.unique_name,new_title: 'Navigator - '+newValue})
      this.$store.commit('taskManager/change_taskbarname',{unique_name:this.data.unique_name,new_taskbarname:newValue})
    }},


  methods: {
    selecteditems(items) {
      this.selectedfiles = items;
    },
  
  },
  mounted() {
    this.$store.registerModule(['taskManager','taskManagerModules',this.data.unique_name] , navigatorInstance)
    this.store='taskManager/taskManagerModules/'+this.data.unique_name+'/'
    this.$store.dispatch(this.store+'update_folder_data',1)

  },
  beforeDestroy() {
    this.$store.unregisterModule(['taskManager','taskManagerModules',this.data.unique_name])
  },
  data: function() {
    return {
      store: ''
    };
  }
};
</script>
<style>
.footer {
  display: flex;
  align-items: center;
  min-height: 8px;
  width: 100%;
  background-color: rgb(56, 56, 56);
  white-space: nowrap;
}

.flex-container {
  display: flex;
  align-items: stretch;
}

.flex-row {

}

.flex-column {
  flex-direction: column;
  
}


#explorer {
display: flex;
  align-items: stretch;
}
.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
}
.middle-container {
height: 100%;
overflow: hidden;
}
</style>
