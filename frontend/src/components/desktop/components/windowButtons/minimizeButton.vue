<script>
import baseButton from './mixins/baseButton.vue'
export default {
 name: 'closeButton',
 
 data: function () {

     return {
    icon: 'chevron-down'
    }

 },
 mixins: [baseButton],
}
</script>