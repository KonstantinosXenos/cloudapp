<template>
  <div id="navigator" class="flex-container flex-column" style="align-items: stretch;">
    <toolbar class="flex-row"></toolbar>
    <div class="flex-container flex-row middle-container">
      <iconpanel
        style="width: 50%;"
        @selecteditems="selecteditems"
        ref="icon_panel"
      ></iconpanel>
      <preview style="margin-left: auto;width: 50%;"></preview>
    </div>
    <div class="footer flex-row"></div>
  </div>
</template>
<script>
import toolbar from "@/components/navigator/components/toolbar/toolbar.vue";
import preview from "@/components/navigator/components/preview";
import iconpanel from "@/components/navigator/components/icon_panel/icon_panel.vue";

export default {
  name: "navigator",
  components: {
    toolbar,
    preview,
    iconpanel
  },
    watch: {
    $route(to) {
      
      this.$store.dispatch('update_folder_data',to.params.id)

    }},


  methods: {
    selecteditems(items) {
      this.selectedfiles = items;
    },
  
  },
  mounted() {
    // this.$store.dispatch('update_folder_data',this.$route.params.id)
    this.$store.dispatch('update_folder_data',1)
  },
  data: function() {
    return {

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
