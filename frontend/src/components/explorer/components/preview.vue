
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
  props: ["selectedfiles"],

  computed: {
    // a computed getter
    fileurl: function() {
      // `this` points to the vm instance
      try {
        return this.selectedfiles[0].item.fileUrl;
      } catch (err) {
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