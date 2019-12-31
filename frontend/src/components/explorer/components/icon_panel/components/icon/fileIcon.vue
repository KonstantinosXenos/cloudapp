<script>
import iconbasemixin from './mixins/iconbasemixin.vue'
import fileIconMixin from './mixins/fileIconMixin.vue'
export default {
 name: 'folderIcon',
 
 data: function () {

     return {
         icon:"file-pdf"
    }

 },
 mixins: [iconbasemixin,fileIconMixin],
}
</script>