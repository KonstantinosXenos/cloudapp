<template>
<button id="toolbarbutton" :disabled="is_disabled" @click="click_event">
<font-awesome-icon :icon="icon" :style="{ color: 'white' }"


/>
    <!-- <font-awesome-icon :icon="['fas', 'fa-level-up-alt']" /> -->

</button>
    </template>


<script>

export default {
name: 'toolbarbutton',


};
</script>