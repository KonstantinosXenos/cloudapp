<script>
import iconbasemixin from './mixins/iconbasemixin.vue'
import folderIconMixin from './mixins/folderIconMixin.vue'
export default {
 name: 'folderIcon',
 
 data: function () {

     return {
         icon:"folder-open"
    }

 },
 mixins: [iconbasemixin,folderIconMixin],
}
</script>