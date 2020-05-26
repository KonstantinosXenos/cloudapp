
<template>
  <div id="toolbar">
    <div class="rowparent">
      <div id="pathbar" class="toolbar-item">
        <i class="las la-folder fa-rotate-270" style="color: black; margin-right: 1px; "></i>
        <div class="sidetoside" v-for="i in this.$store.getters[store+'folder_path']" v-bind:key="i.pk">
          <b>></b>
          <div @click="clicked(i.pk)" class="pathbarfolderbuttons">
            <b>{{i.title}}</b>
          </div>
        </div>
      </div>
      <upbutton :store='store' class="toolbar-button toolbar-item"></upbutton>
      <refreshbutton :store='store' class="toolbar-button toolbar-item"></refreshbutton>
      <uploadbutton :store='store' class="toolbar-button toolbar-item" @clickedfile="open_file_input()"></uploadbutton>

      <label>
        File
        <input
          v-show="false"
          type="file"
          id="file"
          ref="file"
          style="display: none;"
          v-on:change="handleFileUpload()"
          accept=".pdf"
          multiple
        />
      </label>
      <input class="toolbar-item" type="text" placeholder="Search.." id="searchbar" />
    </div>
  </div>
</template>


<script>
import upbutton from "./components/upbutton.vue";
import uploadbutton from "./components/uploadbutton.vue";
import refreshbutton from "./components/refreshbutton.vue";
import navigation from "@/components/navigator/interfaces/navigation.vue"
export default {
  name: "toolbar",
  components: { upbutton, uploadbutton, refreshbutton },
  props:['store'],
  mixins: [navigation],
  methods: {
    clicked: function(pk) {
      this.change_folder(pk,this.store);
    },
    open_file_input() {
      this.$refs.file.click();
    },

    handleFileUpload() {
      this.$refs.file.files.forEach(file_for_upload => {
        var formData = new FormData();

        formData.append("fileuploaded", file_for_upload);
        formData.append("folder", this.$store.getters[this.store+'current_folder_id']);
        formData.append("original_filename", file_for_upload.name);
        formData.append("file", "");
        window.api
          .post("/api/file/upload/", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => this.$store.commit('taskManager/taskManagerModules/navigator/update_folder_data', [response.data])
          )
          
      });
    }
  }
};
</script>

<style scoped>
.pathbarfolderbuttons {
  padding-left: 4px;
  padding-right: 4px;
  border: 0.5px solid transparent;
  user-select: none;
}
.pathbarfolderbuttons:hover {
  background-color: aliceblue;
  border: 0.5px solid;
}
#projecttitle {
  margin-right: 30px;
  color: white;
  font-size: 20px;
  padding-left: 20px;
  white-space: nowrap;
}
#toolbar {
  display: flex;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;
  width: 100%;
  background-color: rgb(56, 56, 56);
  white-space: nowrap;
}
.rowparent {
  display: flex;
  width: 100%;
  align-items: center;
  white-space: nowrap;
}
.sidetoside {
  display: flex;
}
#pathbar {
  margin-left: 10px;
  padding-left: 10px;

  width: 400px;
  max-width: 400px;
  background-color: rgb(255, 255, 255);
  
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-right: 10px;
  font-size: 12px;
}
.toolbar-item {
  height: 25px;
  outline: 0;
  border-radius: 3px;
}
#searchbar {
  width: 200px;
  background-color: rgb(255, 255, 255);
  
  border: none;
  padding: 0px;
  margin: 0px;
  padding-left: 20px;
  margin-left: auto;
  /* align-self: flex-end; */
  margin-right: 20px;
  white-space: nowrap;
}

.toolbar-button {
  background-color: rgb(99, 99, 99);
  border-color: rgb(77, 77, 77);
  width: 30px;
  min-width: 30px;
  border-radius: 5px;
  height: 30px;
}
.toolbar-button[disabled] {
  background-color: rgb(165, 165, 165);
}
</style>