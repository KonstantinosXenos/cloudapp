
<template>
  <div class="container">
    <template v-if="fileurl">
      <object class="pdfobject" :data="fileurl" :key="fileurl" />
        
    </template>


<template v-else>
  <h3>Select a file to preview</h3>
</template></div>
</template>
<script>
export default {
  name: 'preview',
  props: ['store'],

  computed: {
    // a computed getter
    fileurl: function() {
      // `this` points to the vm instance
      try {
        var file= this.$store.getters[
        "taskManager/taskManagerModules/navigator/folder_data"
      ].filter(item => item.pk==this.$store.getters[this.store+'get_selected_icons'][0])
  
        if (file[0] && file[0].type==='file') {
 
 
        return file[0].current_version.fileuploaded;}
        else {
          return false;
        }
      } catch (err) {
        console.log(err)
        return false;
      }
    }
  }
};
</script>

<style scoped>
.pdfobject {
  width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
  float: left;
  object-fit: scale-down;

}

.container {
    border-left: 1px solid;
}
h3 {
  width: 100%;
  align-content: center;
   user-select: none;
}

</style>