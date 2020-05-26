<template>
  <div @click="clicked" class="entry">
  <span v-text="window.taskbarname"></span>
  </div>

</template>

<script>

export default {
 name: 'windowentry',
 props: ['window'],
 data: function () {

     return {

    }


 

},
methods: {
  clicked() {
  this.$store.commit("taskManager/remove_minimized", this.window.unique_name)
  this.$store.commit("taskManager/set_focused_window", this.window)
  this.$emit('entryclick')
  
  
  }
}}
</script>

<style>
.entry {
  padding: 5px;
  background:black;
  border: none;
  border-radius:3px;

}
.entry:hover {
  background:gray;
}
</style>
