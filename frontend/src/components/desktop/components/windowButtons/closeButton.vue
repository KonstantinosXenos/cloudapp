<script>
import baseButton from './mixins/baseButton.vue'
export default {
 name: 'closeButton',
 
 data: function () {

     return {
    icon: 'times'
    }
2
 },
 mixins: [baseButton],
}
</script>