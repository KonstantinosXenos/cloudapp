<script>
import toolbarbutton from './mixins/toolbarbutton.vue'
import uploadfilemixin from './mixins/uploadfilemixin.vue'
export default {
 name: 'uploadbutton',
  props:['store'],
 data: function () {

     return {
    icon: 'cloud-upload-alt'
    }

 },
 mixins: [toolbarbutton,uploadfilemixin],
}
</script>