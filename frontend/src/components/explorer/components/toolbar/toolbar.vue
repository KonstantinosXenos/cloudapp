
<template>
  <div id="toolbar">
    <div class="rowparent">
      <div id="projecttitle">AZTEC Docs</div>
      <div id="pathbar" class="toolbar-item">
        <i class="las la-folder fa-rotate-270" style="color: black; margin-right: 1px; "></i>
        <div class="sidetoside" v-for="i in this.$store.getters.folder_path" v-bind:key="i.pk">
          <b>></b>
          <div @click="clicked(i.pk)" class="pathbarfolderbuttons">
            <b>{{i.title}}</b>
          </div>
        </div>
      </div>
      <upbutton class="toolbar-button toolbar-item"></upbutton>
      <uploadbutton class="toolbar-button toolbar-item" @clickedfile="open_file_input()"></uploadbutton>
      <label>
        File
        <input
          type="file"
          id="file"
          ref="file"
          style="display: none"
          v-on:change="handleFileUpload()"
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
export default {
  name: "toolbar",
  components: { upbutton, uploadbutton },
  methods: {
    clicked: function(pk) {
      this.$router.push({ name: "explorer", params: { id: pk } });
    },
    open_file_input() {
      this.$refs.file.click();
    },

    handleFileUpload() {
      console.log(this.$refs.file.files[0]);
      var file_for_upload=this.$refs.file.files[0]
      let formData = new FormData();
      formData.append("fileuploaded", file_for_upload);
      formData.append("folder", this.$store.getters.current_folder_id);
      formData.append("original_filename", file_for_upload.name);
      formData.append("file", "");
      window.api
        .post("/api/fileupload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
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
  min-height: 50px;
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
  padding-left: 20px;
  height: 30px;
  width: 500px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-right: 10px;
}
.toolbar-item {
  height: 30px;
  outline: 0;
}
#searchbar {
  width: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: none;
  padding: 0px;
  margin: 0px;
  padding-left: 20px;
  margin-left: auto;
  align-self: flex-end;
  margin-right: 20px;
  white-space: nowrap;
}

.toolbar-button {
  background-color: rgb(99, 99, 99);
  border-color: rgb(77, 77, 77);
  width: 30px;
  min-width: 30px;
  border-radius: 5px;
}
.toolbar-button[disabled] {
  background-color: rgb(165, 165, 165);
}
</style>