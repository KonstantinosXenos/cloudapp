<template>
  <div class="home">
    <explorer/>
  </div>
</template>

<script>
// @ is an alias to /src
import explorer from '@/components/explorer/explorer.vue'

export default {
  name: 'home',
  components: {
    explorer
  }
}
</script>
