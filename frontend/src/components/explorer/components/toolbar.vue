
<template>
<div id="toolbar">
    
    
    
<div class="rowparent">
    <div id="projecttitle">AZTEC Docs</div>
    <div id="pathbar">
        <i class="las la-folder fa-rotate-270" style="color: black; margin-right: 1px; "></i>
        <div class="sidetoside" v-for="i in this.$store.getters.folder_path" v-bind:key=i.pk>
            <b>></b>
        <div @click='clicked(i.pk)' class="pathbarfolderbuttons"><b>{{i.title}}</b></div></div>
    </div>
   
   <input type="text" placeholder="Search.." id="searchbar"/>
</div>
</div>
    </template>


<script>
export default {
name: 'toolbar',
methods: {
    clicked: function(pk) {
        this.$router.push({ name: 'explorer', params: { id: pk } })
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
    white-space:nowrap;
}
#toolbar {
        display: flex;
    align-items: center;
    min-height: 50px;
    width: 100%;
    background-color: rgb(56, 56, 56);
    white-space:nowrap;


}
.rowparent {
display: flex;
width: 100%;
align-items: center;
white-space:nowrap;
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
    white-space:nowrap;
}

#searchbar {

    height: 30px;
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
  white-space:nowrap;
}



</style>