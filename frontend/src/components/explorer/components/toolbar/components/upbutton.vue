<script>
import toolbarbutton from './mixins/toolbarbutton.vue'
export default {
 name: 'upbutton',
 
 data: function () {

     return {
    icon: 'level-up-alt'
    }

 },
 mixins: [toolbarbutton],
}
</script>