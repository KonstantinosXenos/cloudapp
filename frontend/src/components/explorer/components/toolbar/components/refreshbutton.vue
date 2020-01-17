<script>
import toolbarbutton from './mixins/toolbarbutton.vue'
import refreshmixin from './mixins/refreshmixin.vue'
export default {
 name: 'upbutton',
 
 data: function () {

     return {
    icon: 'redo'
    }

 },
 mixins: [toolbarbutton,refreshmixin],
}
</script>