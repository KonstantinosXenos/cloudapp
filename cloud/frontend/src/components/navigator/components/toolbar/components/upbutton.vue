<script>
import toolbarbutton from './mixins/toolbarbutton.vue'
import upmixin from './mixins/upmixin.vue'
export default {
 name: 'upbutton',
 props:['store'],
 data: function () {

     return {
    icon: 'level-up-alt'
    }

 },
 mixins: [toolbarbutton,upmixin],
}
</script>