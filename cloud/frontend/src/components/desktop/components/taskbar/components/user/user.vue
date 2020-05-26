<template>
<div id='user'><div class="username" v-text="username"></div><div class="portrait"></div></div>
</template>


<script>

export default {
  name: "user",
  computed: {
      username() {

          return this.$store.getters['taskManager/taskManagerModules/user/username']
          
      }
  }

};

</script>

<style scoped>
#user {
    position:relative;
    display:flex;
    color: rgb(255, 255, 255);
    align-self: center;
    margin-left: auto;
    margin-right: 10px;
    align-items: center;
}
.username {
    margin-right: 10px;
      line-height: 100%;
  text-align: center;
        width: 100%;
    height: 100%;
}
.portrait {
    min-width: 35px;
    height: 35px;

    border: solid 2px white;
    border-radius:10px;
}
</style>