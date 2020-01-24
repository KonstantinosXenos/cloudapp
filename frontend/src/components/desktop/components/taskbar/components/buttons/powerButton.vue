<script>
import baseButton from './mixins/baseButton.vue'
import powermixin from './mixins/powermixin.vue'
export default {
 name: 'closeButton',
 
 data: function () {

     return {
    icon: 'power-off'
    }

 },
 mixins: [baseButton,powermixin],
}
</script>