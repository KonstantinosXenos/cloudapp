<script>
import baseButton from './mixins/baseButton.vue'
export default {
 name: 'closeButton',
 
 data: function () {

     return {
    icon: 'times'
    }

 },
 mixins: [baseButton],
methods: {
click_event() {
this.$emit('close_app')
}

}}

</script>