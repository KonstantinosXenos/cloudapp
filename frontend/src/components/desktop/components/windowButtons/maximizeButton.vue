<script>
import baseButton from './mixins/baseButton.vue'
export default {
 name: 'closeButton',
 props: ['maximized'],
 computed: {
icon()  {
    return this.maximized ? ['far','window-restore'] : 'chevron-up'
}
 },
 data: function () {

     return {
    
    }

 },
 mixins: [baseButton],
 methods: {
click_event() {
    this.$emit('maximize')
}

}
}
</script>