<template>
  <div id="explorer" class="flex-container flex-column" style="align-items: stretch;">
    <toolbar></toolbar>
    <div class="flex-container flex-row" style="height: 100%">
      <iconpanel
        style="width: 50%;"
        :folder_data="folder_data"
        @selecteditems="selecteditems"
        ref="icon_panel"
      ></iconpanel>
      <preview v-bind:selectedfiles="selectedfiles" style="margin-left: auto;width: 50%;"></preview>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import toolbar from "@/components/explorer/components/toolbar/toolbar.vue";
import preview from "@/components/explorer/components/preview";
import iconpanel from "@/components/explorer/components/icon_panel/icon_panel.vue";

export default {
  name: "explorer",
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
    this.$store.dispatch('update_folder_data',this.$route.params.id)
    
  },
  data: function() {
    return {
      contents: [],
      folder_data: {},

      selectedfiles: []
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
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}


#explorer {
  max-height: 100vh;
  height: 100vh;
  
}
.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
}

</style>
